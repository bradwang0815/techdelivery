export const config = {
    developer: {
        name: "智広",
        familyName: "近藤",
        givenName: "智広",
        fullName: "近藤智広",
        nameReading: "コンドウ トモヒロ",
        title: "フルスタックエンジニア / 実装リード",
        description:
            "約10年のWebアプリケーション開発経験を持ち、Ruby on Railsを中心としたバックエンド開発が専門領域です。物件・商品・会員データの管理、一覧・検索API、MySQLチューニング、RSpecによるテスト、AWS上での運用まで一貫して担当してきました。",
    },
    social: {
        github: "",
        email: "techdeliverypm@gmail.com",
        location: "Osaka, Japan",
    },
    about: {
        title: "自己紹介",
        description:
            "約10年のWebアプリケーション開発経験を持ち、Ruby on Railsを中心としたバックエンド開発が専門領域です。物件・商品・会員データの管理、一覧・検索API、MySQLチューニング、RSpecによるテスト、AWS上での運用まで一貫して担当してきました。2週間スプリントを前提としたアジャイル開発の中で、API設計、DB設計、アーキテクチャ改善、性能チューニング、コードレビューを行い、生成AI（OpenAI API）をプロダクトに組み込む機能開発にも携わっています。TypeScript / React / Vue.js、Laravel、Node.js、Elasticsearch / Algolia、OpenAPI、BigQueryは補助スキルとして案件に応じて活用。SaaS型の業務管理・分析・EC支援など、顧客が日常業務で使うBtoBプロダクトの開発経験が多く、不動産・住宅領域のようにデータ量と検索性能が重要なドメインでも、ユーザー課題と運用負荷を踏まえたバックエンド改善を重視してきました。保有資格：基本情報技術者、AWS SAA、AWS DVA、Terraform Associate。",
    },
    experiences: [
        {
            position: "契約エンジニア（実装リード）",
            company: "株式会社オヤテックジャパン",
            period: "2024年2月 - 現在 ",
            location: "フルリモート",
            description:
                "Webシステム開発を手掛ける企業において、金融、Web3、業務システムなどの開発プロジェクトに従事しました。シニアフロントエンドエンジニアおよびフルスタックエンジニアとして、要件定義から設計、開発、テスト、リリース、運用・保守まで一貫して担当しました。また、直近のプロジェクトでは、リードエンジニア兼準PMとして、技術面・プロジェクト推進の両面からチームをリードし、開発体制の整備や進捗・品質管理にも携わりました。",
            responsibilities: [
                "既存コードベースの現状分析と改善項目の分類・優先順位付け",
                "Ruby on Rails / Laravel APIのリファクタリング、OpenAPIドキュメント整備",
                "TerraformによるAWSインフラ（ECS, RDS, S3, CloudFront）のIaC化",
                "海外エンジニアを含むチームへのPRレビューと実装方針共有",
            ],
            technologies: ["Ruby on Rails", "Laravel", "MySQL", "AWS", "Terraform", "GitHub Actions", "Next.js"],
        },
        {
            position: "フルスタックエンジニア",
            company: "MediFrame株式会社",
            period: "2020年12月 - 2024年1月 ",
            location: "フルリモート",
            description:
                "医療DX分野において、服薬管理および服薬アフターケアサービスの開発に従事しました。患者・病院・薬局・製薬会社をつなぐクラウド型プラットフォーム「MediFrame」およびSMSを活用した服薬指導サービス「MediFrame SMS」の開発を担当しました。バックエンドエンジニアとして、Node.js、Java（Spring Boot）を活用したAPIおよび業務ロジックの設計・実装を主に担当し、その後はフルスタックエンジニアとして、新機能の開発や既存機能の改善にも携わりました。医療従事者との仕様調整や既存システムとの連携、保守性および拡張性を考慮した設計を念頭に置き、品質の向上と安定した運用に貢献しました。",
            responsibilities: [
                "OpenAI APIを用いたFAQ検索・回答候補提示・根拠リンク表示機能の設計・実装",
                "公演案件の状態遷移を一覧化し、運営メンバーの確認作業を削減",
                "一覧・検索APIの性能改善（平均1.8秒→1.1秒）とCSV非同期出力の整備",
                "GitHub Copilot / Claudeを活用した開発ワークフロー整備",
            ],
            technologies: ["TypeScript", "Next.js", "Laravel", "Node.js", "OpenAI API", "AWS", "Terraform", "Redis"],
        },
        {
            position: "フルスタックエンジニア / バックエンド主担当",
            company: "株式会社アイ・トライブ",
            period: "2016年4月 - 2020年11月 ",
            location: "日本",
            description:
                "大阪大学EDGEプログラムにおける教育・イノベーション支援システムの開発プロジェクトに参画。フロントエンドエンジニアとして開発に携わった後、フルスタックエンジニアとしてWebシステム全体の設計・開発・運用・保守を担当しました。Laravelを中心とした業務システム開発を通じて、要件に応じた設計・実装から運用改善まで幅広い経験を積み、Webアプリケーション開発の基盤となる技術力を培いました。",
            responsibilities: [
                "EC支援SaaS業務管理システムのLaravel APIリニューアルとRedisキャッシュ戦略",
                "Node.js APIゲートウェイ設計とOpenAPI / モック駆動開発の導入",
                "受注・会員管理の夜間バッチ並列化（95分→55分）とMySQL性能改善",
                "既存仕様差分約80項目の一覧化と段階移行による手戻り削減",
            ],
            technologies: ["Laravel", "React", "Vue.js", "Node.js", "MySQL", "Redis", "OpenAPI", "AWS"],
        },
    ],
    projects: [
        {
            id: 1,
            title: "マーケティングオートメーションSaaS刷新",
            category: "SaaS / 実装リード",
            technologies: "Ruby on Rails, Laravel, MySQL, AWS, Terraform, GitHub Actions, Next.js, RSpec",
            image: "/images/project-01.png",
            description:
                "マーケティングオートメーションSaaSの刷新を担当。既存コードベースの現状分析からアーキテクチャ改善、API設計・実装、TerraformによるIaC化、CI/CD整備までを実施。約3ヶ月で主要機能の刷新と本番運用体制を確立。",
        },
        {
            id: 2,
            title: "Fanfun運用基盤・生成AIサポート機能改善",
            category: "AI / サポート基盤",
            technologies: "Next.js, Laravel, OpenAI API, Terraform, AWS, TypeScript",
            image: "/images/project-02.png",
            description:
                "自社アプリ「Fanfun」の運用管理画面とサポート向け生成AI検索機能を改善。FAQ検索・回答候補提示・根拠リンク表示を実装し、通知・イベント応募関連の月次問い合わせを約18%削減。",
        },
        {
            id: 3,
            title: "ライブ公演・チケット管理プラットフォーム改善",
            category: "フルスタック / イベント管理",
            technologies: "Laravel, Vue.js, Node.js, MySQL, Sentry, CloudWatch",
            image: "/images/project-03.png",
            description:
                "お笑いライブ公演のチケット販売・出演者調整・配信枠管理の改善を担当。公演ステータスの状態遷移を一覧化し、運営メンバーの確認時間を1件あたり8〜10分から5分前後に短縮。",
        },
        {
            id: 4,
            title: "公演集客・データ分析SaaS機能改善",
            category: "SaaS / 性能改善",
            technologies: "Next.js, Node.js, Ruby on Rails, Aurora MySQL, Redis, GitHub Actions",
            image: "/images/project-04.png",
            description:
                "告知効果の可視化・保存リスト・検索・CSV出力機能を持つ分析SaaSで、一覧・検索APIの性能改善を担当。主要API応答時間を平均1.8秒→1.1秒に改善し、CSV出力の非同期化でタイムアウトをほぼ0件に抑制。",
        },
        {
            id: 5,
            title: "AI活用ワークフロー整備",
            category: "DevOps / AI",
            technologies: "GitHub Copilot, Claude, Cline, GitHub, TypeScript",
            image: "/images/project-05.png",
            description:
                "Issue分解・PR説明・テスト観点作成のテンプレートを整備。機密情報ポリシーとレビュー観点を明文化し、PR説明・テスト観点作成時間を平均30〜40%短縮、レビュー差し戻しを約15%減少。",
        },
        {
            id: 6,
            title: "D2Cサプリメントアプリ向けAPI・CI/CD整備",
            category: "API / インフラ",
            technologies: "Node.js, TypeScript, OpenAPI, AWS ECS, ALB, GitHub Actions",
            image: "/images/project-06.png",
            description:
                "D2Cサプリメントアプリ向けAPIとCI/CD整備に参画。OpenAPI仕様とモック駆動開発を導入し、API仕様起因の手戻りを約30%削減。デプロイ作業を手動30分から10分以内に短縮。",
        },
        {
            id: 7,
            title: "EC支援SaaS業務管理刷新",
            category: "バックエンド / リニューアル",
            technologies: "Laravel, React, Redis, OpenAPI, MySQL, GitHub Actions",
            image: "/images/project-07.png",
            description:
                "EC支援SaaS型業務管理システムのリニューアルでバックエンド設計・実装を担当。既存仕様差分約80項目を一覧化し、検索・一覧系APIのレスポンスを1.5秒→0.9秒に改善。",
        },
        {
            id: 8,
            title: "医療・福祉クラウド基盤AWS移行",
            category: "クラウド / 移行",
            technologies: "Laravel, AWS ECS, RDS, S3, CloudFront, GitHub Actions, Docker",
            image: "/images/project-08.png",
            description:
                "医療機関向け施設基準管理と社会福祉協議会向け業務管理クラウドのAWS移行を担当。約12万件のデータ移行と帳票・添付ファイル移行を大きな障害なく完了。",
        },
        {
            id: 9,
            title: "ECモール受注・会員管理システム機能拡張",
            category: "機能拡張 / 性能改善",
            technologies: "Node.js, TypeScript, Vue.js, MySQL, JMeter",
            image: "/images/project-09.png",
            description:
                "ECコンサル案件向けの受注・会員管理システムの機能拡張と性能改善。夜間バッチの並列化（95分→55分）、MySQLインデックス最適化、負荷テストでピーク時エラー率1%未満を達成。",
        },
        {
            id: 10,
            title: "EC支援SaaS保守運用・改善",
            category: "保守運用 / 障害対応",
            technologies: "Laravel, MySQL, Sentry, CloudWatch",
            image: "/images/project-10.png",
            description:
                "既存EC支援SaaSの保守運用と機能改善を担当。Sentry通知整理と調査手順の整備により、一次調査時間を平均20分→10〜12分に短縮。",
        },
        {
            id: 11,
            title: "利用者向けヘルスケアアプリ新規開発",
            category: "モバイル / API",
            technologies: "React Native, Node.js, Express, Firebase, TypeScript",
            image: "/images/project-11.png",
            description:
                "利用者・家族向けヘルスケアアプリ（iOS/Android）の新規開発に参画。Node.js BFF、Firebase認証・プッシュ通知を構築し、主要クラッシュをリリース後1ヶ月で6件→1件に減少。",
        },
        {
            id: 12,
            title: "社会福祉協議会向け業務管理SaaS開発",
            category: "SaaS / 業務管理",
            technologies: "Laravel, Vue.js, MySQL, Docker",
            image: "/images/project-12.png",
            description:
                "相談・自立支援業務管理SaaSの開発に参画。承認フロー、通知、権限管理、帳票出力をLaravel + Vue.jsで実装し、月次確認作業を約10時間削減。",
        },
        {
            id: 13,
            title: "医療機関向け施設基準管理システム改修",
            category: "医療 / システム改修",
            technologies: "Laravel, React, MySQL, PHP",
            image: "/images/project-13.png",
            description:
                "施設基準一覧・詳細、従事者管理、申請書類出力の改修に参画。一覧表示速度を約2.4秒→1.6秒に改善し、例外処理整理によりエラー問い合わせを約15%削減。",
        },
        {
            id: 14,
            title: "医療・福祉業務システム開発補助",
            category: "開発補助 / テスト",
            technologies: "Java, Spring, Python, JUnit, MySQL",
            image: "/images/project-14.png",
            description:
                "医療・福祉向け業務管理システムの開発補助・テスト補助を担当。帳票修正、入力チェック、テストデータ作成を通じて実務開発の基礎を習得。",
        },
    ],
    contact: {
        email: "techdeliverypm@gmail.com",
        github: "#",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        instagram: "#",
    },
    skills: {
        develop: {
            title: "バックエンド / API",
            description: "Ruby on Railsを軸とした高負荷システム設計",
            details:
                "Ruby on Rails / Laravel / Node.jsでのAPI開発、MySQL / Aurora MySQLの設計・性能チューニング、RSpecによるテスト整備。物件・会員・受注データのように一覧・検索負荷が高いドメインでの改善経験があり、OpenAPI先行定義やRedisキャッシュ、バッチ処理の最適化を得意としています。",
            tools: [
                "Ruby on Rails",
                "Ruby",
                "Laravel",
                "Node.js",
                "MySQL",
                "Aurora",
                "RSpec",
                "Redis",
                "OpenAPI",
            ],
        },
        design: {
            title: "フロントエンド / クラウド / 補助",
            description: "Railsバックエンドと組み合わせた横断開発",
            details:
                "React / Next.js / Vue.jsを用いた管理画面開発、AWS + Terraform + GitHub Actionsによるインフラ構築・CI/CD改善、OpenAI APIを用いた生成AI機能のプロダクト組み込み。Elasticsearch / Algoliaによる検索性能改善、Sentry / CloudWatchによる可観測性の確保も担当範囲です。",
            tools: [
                "TypeScript",
                "React",
                "Next.js",
                "Vue.js",
                "AWS",
                "Terraform",
                "GitHub Actions",
                "OpenAI API",
                "Elasticsearch",
            ],
        },
    },
    ui: {
        landing: {
            greeting: "はじめまして、",
            roleLine1: "フルスタックエンジニア",
            roleLine2: "実装リード",
        },
        nav: {
            about: "自己紹介",
            work: "実績",
            contact: "連絡先",
            brand: "TK",
        },
        whatIDo: {
            title: "できること",
            skillsetLabel: "スキルセット",
        },
        career: {
            title: "キャリア",
            titleSpan: "と",
            titleLine2: "経験",
            now: "現在",
        },
        work: {
            title: "主な",
            titleSpan: "実績",
            toolsLabel: "技術・機能",
            seeMoreTitle: "もっと見る？",
            seeMoreDescription: "すべてのプロジェクトをご覧ください",
            seeAllButton: "すべての実績 →",
        },
        techStack: {
            title: "技術スタック",
        },
        contact: {
            title: "連絡先",
            subtitle: "お仕事のご相談・お問い合わせはこちらから",
            email: "メール",
            location: "所在地",
            social: "SNS",
            designedBy: "Design & Development by",
        },
        loading: {
            brand: "近藤智広",
            marquee: "フルスタックエンジニア / 実装リード",
            marqueeAlt: "実装リード",
            loading: "読み込み中",
            welcome: "ようこそ",
        },
        resume: "職務経歴書",
        myWorks: {
            back: "← ホームに戻る",
            title: "すべての",
            titleSpan: "実績",
            subtitle: "プロジェクトと開発実績の一覧",
        },
        app: {
            loading: "読み込み中...",
        },
    },
};
