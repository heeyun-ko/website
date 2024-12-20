import fs from 'fs';
import path from 'path';

// 블로그 디렉토리 경로
const BLOG_DIR = 'src/content/blog';
const PORTFOLIO_DIR = 'src/content/portfolio';

// 블로그 디렉토리 초기화
console.log('🧹 Cleaned blog directory');
if (fs.existsSync(BLOG_DIR)) {
  fs.rmSync(BLOG_DIR, { recursive: true });
}
fs.mkdirSync(BLOG_DIR, { recursive: true });

// 파일 복사 함수
function copyFile(source, destination) {
  const content = fs.readFileSync(source, 'utf8');
  
  // frontmatter에서 published 확인
  const publishedMatch = content.match(/published:\s*true/);
  
  if (publishedMatch) {
    fs.writeFileSync(destination, content);
    console.log(`✅ Copied ${source} to blog directory`);
  } else {
    console.log(`ℹ️ Skipped ${source} (not marked for publishing)`);
  }
}

// Blog 폴더의 파일들 처리
if (fs.existsSync('Blog')) {
  const files = fs.readdirSync('Blog');
  files.forEach(file => {
    if (file.endsWith('.md')) {
      copyFile(
        path.join('Blog', file),
        path.join(BLOG_DIR, file)
      );
    }
  });
}

// 다른 마크다운 파일들 처리 (portfolio 파일 제외)
['DEPLOYMENT.md', 'README.md'].forEach(file => {
  if (fs.existsSync(file)) {
    copyFile(file, path.join(BLOG_DIR, file));
  }
});

console.log('🎉 Sync completed successfully!'); 