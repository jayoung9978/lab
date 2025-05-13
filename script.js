// fortunes.json 파일을 같은 경로에 두고 불러옵니다.
fetch('fortunes.json')
  .then(res => res.json())
  .then(fortunes => {
    const btn = document.getElementById('btn');
    const display = document.getElementById('fortune');

    btn.addEventListener('click', () => {
      // 0~(length-1) 사이 랜덤 인덱스 생성
      const idx = Math.floor(Math.random() * fortunes.length);
      display.textContent = fortunes[idx];
    });
  })
  .catch(err => {
    console.error('운세 데이터를 불러오지 못했습니다:', err);
    document.getElementById('fortune').textContent = '오류가 발생했습니다.';
  });
