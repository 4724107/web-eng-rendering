const app = document.querySelector("#app");
if (app === null) {
  throw new Error("#appが見つからない");
}

function render(target: Element): void {
  const page = location.hash;

  if (page === "#detail") {
    target.innerHTML = `
      <h1>詳細</h1>
      <p>CSRではハッシュ（#）が変化してもサーバへ新しいHTMLを要求しません。</p>
    `;
  } else {
    target.innerHTML = `
      <h1>比較</h1>
      <p>MPAはページごとにHTMLを取得し、SPAはブラウザ内で画面を切り替えます。</p>
    `;
  }
}

window.addEventListener("hashchange", () => {
  render(app);
});
render(app);