export const config = {
    developer: {
        name: "智広",
        familyName: "近藤",
        givenName: "智広",
        fullName: "近藤智広",
        nameReading: "コンドウ トモヒロ",
        title: "テックリード / フルスタックエンジニア",
        description:
            "自社WebサービスおよびSaaS開発において、フロントエンド・バックエンド・インフラを横断したアーキテクチャ設計と実装・運用改善に従事。高負荷なバックエンドAPI設計、マルチテナントSaaSのインフラ最適化、機密性の高いデータを扱うセキュリティ設計を強みとする。",
    },
    social: {
        github: "",
        email: "techdeliverypm@gmail.com",
        location: "Osaka, Japan",
    },
    about: {
        title: "自己紹介",
        description:
            "約10年のWebアプリケーション開発経験を持つテックリード／フルスタックエンジニアです。React / Next.js / Vue.js、Node.js、PHP / Laravel、TypeScriptを軸に、高負荷なバックエンドAPI設計、DBパフォーマンスチューニング、AWS / GCP / Azureを用いたマルチテナントSaaSのインフラ最適化、TerraformによるIaC化を一貫して担当してきました。直近では開発中断していたSaaSの再構築を主導し、コードベース約15万行の棚卸しからアーキテクチャ再設計、CI/CD再構築までを実施。生成AI APIを活かした開発生産性向上やRAG構築の経験もあり、ビジネス要件と技術的制約のバランスを考慮した設計と、組織全体の技術力を底上げするレビュー文化の醸成に貢献してきました。保有資格：基本情報技術者、AWS SAA、AWS DVA、Terraform Associate。",
    },
    experiences: [
        {
            position: "契約テックリード",
            company: "株式会社オヤテックジャパン",
            period: "2026年1月 - 現在",
            location: "フルリモート",
            description:
                "開発中断していたマーケティングオートメーションSaaSの再構築を主導。約15万行のコードベース棚卸し、アーキテクチャ再設計、ECS Fargateへの移行、CI/CD再構築を実施。約3ヶ月でプロダクトを再稼働可能な状態に復旧。",
            responsibilities: [
                "コードベース約15万行の棚卸しと技術的負債の分類・解消",
                "Next.js / Laravel APIのリファクタリングとOpenAPI先行定義",
                "TerraformによるAWSインフラ再設計（ECS Fargate移行）",
                "海外エンジニア3名のオンボーディングとADRによる意思決定の文書化",
            ],
            technologies: ["Next.js", "Laravel", "TypeScript", "AWS", "Terraform", "GitHub Actions"],
        },
        {
            position: "テックリード / 準PM / フルスタックエンジニア",
            company: "株式会社SKIウエスト",
            period: "2024年4月 - 2025年12月",
            location: "フルリモート",
            description:
                "マーケティング支援SaaS、サイト売買プラットフォーム、ホスティング管理機能など複数の自社サービス開発に従事。AI機能連携（RAG）、大規模データ処理の性能改善、決済Webhookの非同期化などを担当。",
            responsibilities: [
                "OpenAI API + Pineconeによるサポート向けRAG検索機能の構築",
                "キーワード調査SaaSのAPI応答時間を1.8秒→1.1秒に改善",
                "Stripe連携WebhookのSQS非同期処理と冪等性設計",
                "AI活用ワークフロー整備とチーム勉強会の主催",
            ],
            technologies: ["Next.js", "Laravel", "Node.js", "OpenAI API", "AWS", "Terraform", "Redis"],
        },
        {
            position: "機能リード / バックエンドリード / 準PM",
            company: "株式会社Phoenixテクノロジーズ",
            period: "2021年4月 - 2024年3月",
            location: "日本",
            description:
                "BtoB SaaS・予約管理・会員管理・モバイルAPIなどのWebサービス開発に従事。バックエンド設計、性能改善、CI/CD整備、若手メンバーの技術指導を担当。",
            responsibilities: [
                "NestJS APIゲートウェイ設計とOpenAPI / モックサーバーによる並行開発",
                "SaaS業務管理システムのLaravel APIリニューアルとRedisキャッシュ戦略",
                "予約APIの排他制御と夜間バッチの並列化（95分→55分に短縮）",
                "GitHub ActionsによるECSデプロイパイプライン構築",
            ],
            technologies: ["Laravel", "React", "Vue.js", "NestJS", "Node.js", "MySQL", "Redis", "AWS"],
        },
        {
            position: "メンバー / サブリーダー",
            company: "株式会社情報技術",
            period: "2015年10月 - 2021年3月",
            location: "日本",
            description:
                "ECサイト・CMS・業務管理画面・モバイルAPI・AWS移行などを経験しWebアプリケーション開発の基礎を段階的に習得。React Nativeアプリ開発、Laravel業務管理SaaS、ECリニューアルなどに参画。",
            responsibilities: [
                "EC・CMS基盤のAWS移行（ECS / RDS / S3 / CloudFront）",
                "React Native + Node.js BFFによるモバイルアプリ新規開発",
                "Laravel + Vue.jsによる業務管理SaaSの承認フロー実装",
                "GitHub Actions CI/CDパイプライン整備とデータ移行バッチ開発",
            ],
            technologies: ["Laravel", "React", "Vue.js", "React Native", "AWS", "PHP", "MySQL"],
        },
    ],
    projects: [
        {
            id: 1,
            title: "マーケティングオートメーションSaaS再構築",
            category: "SaaS / テックリード",
            technologies: "Next.js, Laravel, TypeScript, AWS, Terraform, GitHub Actions, Docker",
            image: "/images/project-01.png",
            description:
                "開発中断していたマーケティングオートメーションSaaSの再構築。約15万行の棚卸しからアーキテクチャ再設計、ECS Fargate移行、CI/CD再構築までを主導。約3ヶ月で主要機能を再稼働。",
        },
        {
            id: 2,
            title: "ホスティング管理・AIサポート検索",
            category: "AI / RAG",
            technologies: "Next.js, Laravel, OpenAI API, Pinecone, Terraform, AWS WAF, Playwright",
            image: "/images/project-02.png",
            description:
                "DNS/SSL状態の可視化とサポート向けRAG検索機能を構築。FAQ・マニュアル・問い合わせ履歴約2,000件をベクター化し、回答候補と参照元を提示。DNS/SSL関連問い合わせを約18%削減。",
        },
        {
            id: 3,
            title: "サイト売買プラットフォーム改善",
            category: "フルスタック / 決済",
            technologies: "Laravel, Vue.js, Node.js, Stripe, SQS, Sentry, CloudWatch",
            image: "/images/project-03.png",
            description:
                "案件管理・本人確認・エスクロー入出金の状態遷移を6段階で整理し一画面化。Stripe WebhookのSQS非同期処理と冪等性設計により、決済遅延を月平均3件からほぼ0件に改善。",
        },
        {
            id: 4,
            title: "キーワード調査SaaS機能改善",
            category: "SaaS / 性能改善",
            technologies: "Next.js, Node.js, Aurora MySQL, Redis, AWS Batch, k6, GitHub Actions",
            image: "/images/project-04.png",
            description:
                "大量データ表示の仮想スクロール導入、cursorベースページング、CSV非同期出力（AWS Batch）により、API応答時間を1.8秒→1.1秒に改善。タイムアウト発生をほぼ0件に抑制。",
        },
        {
            id: 5,
            title: "AI活用開発ワークフロー整備",
            category: "DevOps / AI",
            technologies: "GitHub Copilot, Claude, Cline, GitHub, Backlog, Markdown",
            image: "/images/project-05.png",
            description:
                "Issue分解・PR説明・テスト観点・リファクタリング方針の4種テンプレートを整備。機密情報ポリシーを策定し、チーム勉強会を3回開催。PR説明作成時間を30〜40%短縮。",
        },
        {
            id: 6,
            title: "モバイルAPI・CI/CD整備",
            category: "API / インフラ",
            technologies: "NestJS, OpenAPI, Prism, AWS ECS, ALB, GitHub Actions, Terraform",
            image: "/images/project-06.png",
            description:
                "NestJS APIゲートウェイとOpenAPI先行定義、モックサーバーによる並行開発体制を構築。API仕様起因の手戻りを約30%削減。デプロイ作業を30分→10分以内に短縮。",
        },
        {
            id: 7,
            title: "SaaS業務管理システム刷新",
            category: "バックエンド / リニューアル",
            technologies: "Laravel, React, Redis, Sanctum, Swagger, Docker, GitHub Actions",
            image: "/images/project-07.png",
            description:
                "既存仕様差分約80項目を一覧化しLaravel API + React SPAへ段階移行。検索・一覧系APIのレスポンスを1.5秒→0.9秒に改善。新旧システム並行稼働時のデータ不整合を月平均2件まで抑制。",
        },
        {
            id: 8,
            title: "EC・CMS基盤AWS移行",
            category: "クラウド / 移行",
            technologies: "Laravel, AWS ECS, RDS, S3, CloudFront, Python, GitHub Actions",
            image: "/images/project-08.png",
            description:
                "オンプレミスLaravelアプリをAWSへ移行。約12万件のデータ移行と約5万ファイルのS3移行を完了。CloudFrontキャッシュヒット率を60%→85%に改善し、ページ読み込み速度を約20%向上。",
        },
        {
            id: 9,
            title: "予約・会員管理システム機能拡張",
            category: "機能拡張 / 性能改善",
            technologies: "Node.js, Vue.js, MySQL, BullMQ, Redis, JMeter, Azure DevOps",
            image: "/images/project-09.png",
            description:
                "予約APIの排他制御と通知キュー駆動化、夜間バッチの並列化（95分→55分）を実施。WebSocketによるリアルタイム更新と負荷テストでピーク時エラー率0.3%を達成。",
        },
        {
            id: 10,
            title: "BtoB SaaS保守運用・改善",
            category: "保守運用 / 障害対応",
            technologies: "Laravel, MySQL, Sentry, CloudWatch, GitHub, Backlog",
            image: "/images/project-10.png",
            description:
                "障害調査・問い合わせ対応・管理画面改修を担当。Sentry通知の再定義と調査用SQL集の整備により、一次調査時間を20分→10〜12分に短縮。",
        },
        {
            id: 11,
            title: "モバイルアプリ新規開発",
            category: "モバイル / API",
            technologies: "React Native, Express, Firebase, MySQL, Docker, CircleCI",
            image: "/images/project-11.png",
            description:
                "React Native + Node.js BFFによるiOS/Androidアプリ新規開発。Firebase認証・プッシュ通知・Crashlyticsを導入し、ストア審査対応からリリース後改善まで担当。",
        },
        {
            id: 12,
            title: "業務管理SaaS開発",
            category: "SaaS / 業務管理",
            technologies: "Laravel, Vue.js, MySQL, Docker, GitHub Actions",
            image: "/images/project-12.png",
            description:
                "申請・多段階承認フロー・通知・権限管理・帳票出力をLaravel + Vue.jsで実装。承認ルートのルールエンジン化により、月次確認作業を約10時間削減。",
        },
        {
            id: 13,
            title: "中規模ECリニューアル",
            category: "EC / リニューアル",
            technologies: "Laravel, React, MySQL, Redis, Docker, Git",
            image: "/images/project-13.png",
            description:
                "商品一覧・カート・決済・在庫管理のフロント改修とAPI開発。在庫の楽観ロックとRedisキャッシュにより過剰販売を防止。表示速度を約2.4秒→1.6秒に改善。",
        },
        {
            id: 14,
            title: "社内業務システム開発補助",
            category: "開発補助 / テスト",
            technologies: "Java, Spring, JUnit, MySQL, Git, Subversion",
            image: "/images/project-14.png",
            description:
                "Java/Spring製社内業務システムの帳票修正・入力チェック・単体テスト補助を担当。障害票の再現手順作成とSubversionからGitへの移行作業も支援。",
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
            description: "高負荷・高セキュリティなシステム設計",
            details:
                "Laravel / Node.js（NestJS）でのAPI開発、Webhook、バッチ処理、マルチテナントSaaSのアーキテクチャ設計。権限不足・外部エラー・二重送信を考慮した設計と、大規模データの非同期処理を得意としています。",
            tools: [
                "TypeScript",
                "Node.js",
                "NestJS",
                "Laravel",
                "PHP",
                "MySQL",
                "Aurora",
                "Redis",
                "OpenAPI",
                "RAG",
            ],
        },
        design: {
            title: "フロントエンド / インフラ",
            description: "モダンなSPA開発とクラウド運用改善",
            details:
                "React / Next.js / Vue.jsを用いたSPA開発、Atomic Designによるコンポーネント設計。AWS / Terraform / GitHub Actionsによるインフラ構築・CI/CD改善、Sentry / CloudWatchによる可観測性の確保も担当範囲です。",
            tools: [
                "React",
                "Next.js",
                "Vue.js",
                "AWS",
                "Terraform",
                "Docker",
                "GitHub Actions",
                "Sentry",
                "CloudWatch",
            ],
        },
    },
    ui: {
        landing: {
            greeting: "はじめまして、",
            roleLine1: "テックリード",
            roleLine2: "フルスタックエンジニア",
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
            marquee: "テックリード",
            marqueeAlt: "フルスタックエンジニア",
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
