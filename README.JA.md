# フブキボタン - 白上フブキのボイスボタン

![Version](https://img.shields.io/github/package-json/v/oruyanke/fubuki-button)
![Build](https://img.shields.io/github/workflow/status/oruyanke/fubuki-button/FBK-BTN-NG-CI)
![Last Commit](https://img.shields.io/github/last-commit/oruyanke/fubuki-button)
![Stars](https://img.shields.io/github/stars/oruyanke/fubuki-button)

README: [中文](https://github.com/oruyanke/fubuki-button/blob/master/README.md) | **日本語** | [English](https://github.com/oruyanke/fubuki-button/blob/master/README.EN.md)

> 新しい白上フブキのボイスボタン。白上フブキの総合ファンページを目指します。

ホームページ https://fubuki.moe

関連リンク:

* [白上フブキのYouTubeチャンネル](https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg)
* [白上フブキのBilibiliチャンネル](https://space.bilibili.com/332704117)
* [白上フブキのTwitter](https://twitter.com/shirakamifubuki)

## 計画中の機能

- fubukitap([mikutap](https://aidn.jp/mikutap/) に類似)
- 生放送や動画のカレンダーを表示
- フブキのスタンプ/ミーム
- YouTube/Bilibiliのデータを表示

## このプロジェクトへの貢献(コントリビュート)

GitHubの開発に直接参加する方法が分からない場合は、素材や意見を直接以下のメールアドレスに送信してください。([voice@fubuki.moe](mailto:voice@fubuki.moe))。またメールの中にタイトル、内容及びあなたのID（Bilibili、Twitterやその他）を記述してください。そうすることで私達は下のコントリビューターリストにあなたの名前を掲載することができます。

もしくは素材や意見をGitHubの[Issues](https://github.com/oruyanke/fubuki-button/issues) ページに送ることもできます。メールの場合と同じようにタイトルと内容を記述してください。

もしGitHubでの開発方法を知っている場合は、プロジェクトをフォークして変更してください。変更が完了したら、プルリクエストしてください。各項目の編集に関しては以下に記述されています。

### 音声の追加または修正

音声データはmp3のビットレート128Kbpsで統一し、`static/voices/`に保存してください。対応するURLは`/voices/`に入れてください。

すべての音声データのメタデータは`assets/voices.json`に追加または修正をしてください。

音声を変更する場合は変更後に変更前のファイルを削除してください。音声ファイルは，必ず過去を含め現在のファイル名と同じものであってはなりません。

### 翻訳

日本語と英語への翻訳が必要です！

ボタンなどのテキストの翻訳は `assets/locales/` 内に各言語に対応した3つの.jsonファイルがあります。

音声のタイトルテキストファイルは `aseets/voices.json` 内にあります。

## ローカルでのデプロイ

ローカル開発環境をデプロイする
このサイトはVue + NuxtJS + Vuetifyを使用して開発しています。

ローカル開発環境をデプロイするためには、まず最新版のNodeとYarnをインストールしてください。その後、以下の手順に従ってください。

 1. コードをforkしてクローンする。
 2. コードディレクトリに移動し、yarnを実行して依存関係をインストールする。
 3. `yarn dev`を実行し、`localhost:3000`でローカル開発サーバーを起動する。ローカル開発サーバーでは、変更した結果をすぐに反映させることが可能です。
 4. デプロイ用ファイルをコンパイルするためには、`yarn generae`を実行して`dist`ディレクトリを生成してください。このサイトは完全に静的なので、distディレクトリ全体を直接デプロイすることができます。

## コントリビューター

開発:

- [孤独のイオン](https://github.com/lonelyion)
- [Asrui Morus](https://github.com/Morxi)

オーディオクリップ：

- Bilibili [孤单离子](https://space.bilibili.com/7564991)
- Bilibili [清流ht](https://space.bilibili.com/22311554)
- Bilibili [绯月天则](https://space.bilibili.com/1592713)
- Bilibili [hanyuu](https://m.bilibili.com/space/356250024)
- Bilibili [蓝颜知渡](https://space.bilibili.com/378488520)

翻訳：

- Twitter [噬魂韓植](https://twitter.com/S_H_H_Z1108)
- GitHub [Dakumasu](https://github.com/dakuamsu)
- GitHub [Yourein](https://github.com/Yourein)
- Twitter [nekoy0212anagi](https://twitter.com/nekoy0212anagi)
- GitHub [Emmmer](https://github.com/ShirakamiEmmmer)

特別協力：

- [VTuber Music](https://vtbmusic.com/)
- Bilibili [吹雪的猫咪茶铺](https://space.bilibili.com/431210892/)
- Bilibili [白上吹雪周报](https://space.bilibili.com/487763794)
- Bilibili [戌神沁音的手指面包店](https://space.bilibili.com/45070033)
- Bilibili [亡音ちゃん](https://space.bilibili.com/2613724)
- そして、GitHubでこのプロジェクトに参加した以下の人々

[![GitHub Contributors](https://contributors-img.web.app/image?repo=oruyanke/fubuki-button)](https://github.com/oruyanke/fubuki-button/graphs/contributors)

## LICENCE

プログラム： [MIT License](https://github.com/oruyanke/fubuki-button/blob/master/LICENSE)

音声: [Hololive 二次创作条款](https://www.hololive.tv/terms)

このプロジェクトはファンによるもので、Hololive公式は一切関係ありません

## サポート

### BrowserStack

Proudly using BrowserStack.

[![](https://i.loli.net/2017/09/27/59cbc16b0f8b4.png)](https://www.browserstack.com/)

> **BrowserStack** is a cloud-based cross-browser testing tool that enables developers to test their websites across various browsers on different operating systems and mobile devices, without requiring users to install virtual machines, devices or emulators.

### Vercel

Powered by Vercel.

[![vercel.png](https://i.loli.net/2020/07/18/rPah8FVmqBXL6dj.png)](https://www.vercel.com/?utm_source=oruyanke)

> **​Vercel** is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.
