const defaultDataset = {
    "init": {
        answers: [
            {content: "一緒に開発がしたい", nextId: "dev_offer"},
            {content: "研究内容を教えて欲しい", nextId: "research"},
            {content: "栗原拓己について知りたい。", nextId: "takumi_info"},
            {content: "相談がしたい", nextId: "dating"},
        ],
        question: "こんにちは！🌰栗原拓己へのご用件はなんでしょうか？",
    },
    "dev_offer": {
        answers: [
            {content: "Webサイトを作りたい", nextId: "website"},
            {content: "Webアプリを作りたい", nextId: "webapp"},
            {content: "自動化ツールを作りたい", nextId: "automation_tool"},
            {content: "その他", nextId: "inquiry"}
        ],
        question: "どのようなものを一緒に作りますか？？",
    },
    "website": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webサイト制作ですね。コチラからお問い合わせできます。",
    },
    "webapp": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webアプリ開発ですね。コチラからお問い合わせできます。",
    },
    "automation_tool": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "自動化ツール開発ですね。コチラからお問い合わせできます。",
    },
    "inquiry": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "コチラからお問い合わせできます。",
    },
    "research": {
        answers: [
            {content: "研究室HPを見る", nextId: "https://sel.ist.osaka-u.ac.jp/index.html.ja"},
            {content: "どんな研究をしているの？", nextId: "research_info"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "私はソフトウェア工学の研究をしています！ソフトウェア工学はソフトウェアの開発・運用・保守に関して体系的・定量的にその応用を考察する分野です🖥",
    },
    "research_info": {
        answers: [
            {content: "あなたの具体的な研究内容は？", nextId: "research_detail"},
            {content: "研究室ではどのような研究をしているの？", nextId: "https://sel.ist.osaka-u.ac.jp/research/index.html.ja"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "StackOverflowなどのQ&Aサイトには日々たくさんのコードが投稿されており、新旧様々な情報が蓄積されています。 ですが、コード片が古くなっている場合最新の環境において利用できません。 そこで、本研究ではGithubのOSSプロジェクトの開発履歴をもとにしてStackOverflowに投稿されたコード片を進化させることで最新の環境で利用可能とすることを目的としています。 具体的には、StackOverflowに投稿されたコード片と類似したコード片をGithubで検索して該当部分の編集履歴を追うことで、最新の環境に適応したコード片を取得し開発者に提示するツールを作りたいと考えています！。",
    },
    "research_detail": {
        answers: [
            {content: "さらに詳細を知りたい", nextId: "inquiry"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "興味をお持ちのようでしたらご連絡お願いします！",
    },
    "dating": {
        answers: [
            {content: "DMする", nextId: "https://twitter.com/takumidev"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "TwitterのDMにてご連絡してください",
    },

    "takumi_info": {
        answers: [
            {content: "尾道市ってどんなところ？", nextId: "https://www.city.onomichi.hiroshima.jp/"},
            {content: "ソフトテニスは今もやってるの？", nextId: "tennis"},
            {content: "DMMWEBCAMPって？", nextId: "https://web-camp.io/commit/lp/?utm_source=cpc-google&utm_medium=commit-tyo-osa-brand&utm_term=dmm%20webcamp_e&gclid=Cj0KCQiAhs79BRD0ARIsAC6XpaWncKVtBGHJSVcCAikFiPk1mI7n2wQvKQu-LFSfVwQ5fc1u_jLQnfIaAvTPEALw_wcB#argument=lndrcWsV&ai=a5f7fc7a9711ad"},
            {content: "もっと詳しく教えてください", nextId: "takumi_sns"},
        ],
        question: "広島県尾道市出身の栗原です！\n趣味はソフトテニスとプログラミングです🎾 普段はDMMWEBCAMPでプログラミングを教えています！",
    },
    "tennis": {
        answers: [
            {content: "愛媛大学ソフトテニス部Twitter", nextId: "https://twitter.com/eustc_official"},
            {content: "豊能クラブ公式HP", nextId: "https://stctoyono.wixsite.com/mysite/post/%E4%BC%8A%E4%B8%B9%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA_2020-11-14"},
            {content: "一緒にテニスがしたいです", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"},
        ],
        question: "学部では時代は愛媛大学ソフトテニス部に所属していて、今は豊能クラブという社会人チームでプレーしています！",
    },
    "takumi_sns": {
        answers: [
            {content: "Twitter", nextId: "https://twitter.com/takumidev"},
            {content: "Instagram", nextId: "https://www.instagram.com/takumi_______86/"},
            {content: "Facebook", nextId: "https://www.facebook.com/profile.php?id=100005429313609"},
            {content: "最初の質問に戻る", nextId: "init"},
        ],
        question: "いろいろSNSをやってますので気軽にフォローしてください！",
    },
}

export default defaultDataset