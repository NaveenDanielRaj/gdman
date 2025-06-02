import path from 'path';
import { fileURLToPath } from 'url';
import SftpClient from 'ssh2-sftp-client';
import fg from 'fast-glob';
import cliProgress from 'cli-progress';
import chalk from 'chalk';

const sftp = new SftpClient();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

  const config = {
    host: import.meta.env.VITE_HOST,
    port: import.meta.env.VITE_PORT,
    username: import.meta.env.VITE_USERNAME,
    password: import.meta.env.VITE_PASSWORD,
  };
console.log("config",config)

const localDistPath = path.resolve(__dirname, '../dist');
console.log("localDistPath--->",localDistPath)
const remoteDistPath = '/dist';

async function deploy() {
  console.log(chalk.cyanBright('\n🚀 Starting Deployment Process...\n'));

  try {
    console.log(chalk.blue('🔌 Connecting to server...'));
    await sftp.connect(config);

    console.log(chalk.blue('🧹 Cleaning old dist folder...'));
    try {
      await sftp.rmdir(remoteDistPath, true);
      console.log(chalk.yellow('🗑️  Previous dist removed.'));
    } catch {
      console.log(chalk.gray('⚠️  No previous dist found, skipping remove.'));
    }

    console.log(chalk.blue('📁 Creating new dist directory...'));
    await sftp.mkdir(remoteDistPath, true);

    console.log(chalk.blue('🔍 Collecting local build files...'));
    const entries = await fg('**/*', {
      cwd: localDistPath,
      dot: true,
      onlyFiles: true,
    });

    console.log("entries",entries)

    const totalFiles = entries.length;
    console.log(chalk.green(`📦 Total files to upload: ${totalFiles}`));

    const progressBar = new cliProgress.SingleBar({
      format: `${chalk.magenta('Uploading')} [{bar}] {percentage}% | {value}/{total} files`,
      barCompleteChar: '█',
      barIncompleteChar: '░',
      hideCursor: true,
    });

    progressBar.start(totalFiles, 0);
    let uploaded = 0;

    for (const file of entries) {
      const localFilePath = path.join(localDistPath, file);
      const remoteFilePath = path
        .join(remoteDistPath, file)
        .replace(/\\/g, '/');
      const remoteDir = path.dirname(remoteFilePath);

      try {
        await sftp.mkdir(remoteDir, true).catch(() => {});
        await sftp.put(localFilePath, remoteFilePath);
        uploaded++;
        progressBar.update(uploaded);
      } catch (uploadErr) {
        console.error(
          chalk.red(`❌ Failed to upload ${file}: ${uploadErr.message}`)
        );
      }
    }

    progressBar.stop();
    console.log(chalk.greenBright('\n✅ Deployment completed successfully!\n'));
  } catch (err) {
    console.error(chalk.redBright(`❌ Deployment failed: ${err.message}`));
  } finally {
    await sftp.end();
    console.log(chalk.blue('🔌 Connection closed.\n'));
  }
}

deploy();