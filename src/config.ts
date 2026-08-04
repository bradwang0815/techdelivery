export const config = {
    developer: {
        name: "智広",
        familyName: "近藤",
        givenName: "智広",
        fullName: "近藤智広",
        nameReading: "コンドウ トモヒロ",
        title: "フルスタックエンジニア / テックリード",
        description:
            "2015年より約11年間、業務支援・ヘルスケア・金融・Web3など多様な領域のWebシステム開発に従事してきたフルスタックエンジニアです。Node.js、Python、Ruby、.NET、TypeScript / React を軸に、要件定義から設計・開発・運用まで一貫して担当し、テックリードおよび準PMとしてチームを牽引してきました。",
    },
    social: {
        github: "",
        email: "techdeliverypm@gmail.com",
        location: "Osaka, Japan",
    },
    about: {
        title: "自己紹介",
        description:
            "約11年間にわたり、教育・医療DX・業務システム・Web3など多様な分野でフルスタック開発を経験してきました。要件をそのまま実装するだけでなく、業務背景や利用者視点を理解したうえで、API設計・データベース設計・画面設計まで一貫して最適な実装を検討できることが強みです。バックエンド・フロントエンド双方を理解しているため、システム全体を俯瞰しながら設計・実装・品質改善を推進できます。近年はテックリードや準PMとして、技術面だけでなくチーム全体の開発効率向上や品質改善にも貢献しています。生成AIを活用したLLM・RAG連携や、Web3ウォレット連携など新しい技術も積極的にキャッチアップし、プロジェクトに最適な形で導入してきました。保有資格：基本情報技術者、AWS Certified Developer – Associate、AWS Certified Solutions Architect – Associate。",
    },
    experiences: [
        {
            position: "シニアフルスタック / テックリード・準PM",
            company: "株式会社オヤテックジャパン（業務委託）",
            period: "2024年2月 - 現在 ",
            location: "フルリモート",
            description:
                "Webシステム開発を手掛ける企業において、金融、Web3、業務システムなどの開発プロジェクトに従事。シニアフロントエンドおよびフルスタックとして要件定義から設計・開発・テスト・リリース・運用まで一貫して担当。直近はリードエンジニア兼準PMとして、技術面とプロジェクト推進の両面からチームをリードしました。",
            responsibilities: [
                "生成AI業務支援システム（HIPCAMP）で.NET / Python / Reactによるフルスタック開発とLLM・RAG基盤の構築",
                "Web3金融プラットフォーム（FoxFinance）のフロントエンド設計・ウォレット連携・スマートコントラクト連携",
                "準PMとして要件整理、進捗・品質管理、設計レビュー・コードレビューを推進",
                "海外メンバーを含むスクラム体制での技術選定・アーキテクチャ設計・メンバー育成",
            ],
            technologies: [
                "TypeScript",
                "React",
                "C# / .NET",
                "Python",
                "Web3.js",
                "AWS",
                "Docker",
                "OpenAI API",
            ],
        },
        {
            position: "フルスタックエンジニア",
            company: "MediFrame株式会社",
            period: "2020年12月 - 2024年1月 ",
            location: "フルリモート",
            description:
                "医療DX分野において、服薬管理および服薬アフターケアサービスの開発に従事。患者・病院・薬局・製薬会社をつなぐクラウド型プラットフォーム「MediFrame」およびSMS服薬指導サービス「MediFrame SMS」を担当。バックエンド（Node.js / Ruby on Rails）からフルスタックへと領域を広げ、医療従事者との仕様調整や保守性・拡張性を重視した設計で品質と安定運用に貢献しました。",
            responsibilities: [
                "MediFrame Platformの機能拡張・DX推進（React / TypeScript / Ruby on Rails）",
                "MediFrame SMSのバックエンドAPI・SMS配信・スケジュール配信機能の設計・実装",
                "Node.jsからRuby on Railsへのバックエンド移行とAPI再設計",
                "SQLチューニング・データモデル改善・医療機関向け仕様調整",
            ],
            technologies: [
                "React",
                "TypeScript",
                "Ruby on Rails",
                "Node.js",
                "PostgreSQL",
                "REST API",
                "Docker",
                "OpenAPI",
            ],
        },
        {
            position: "フロントエンド / フルスタックエンジニア",
            company: "株式会社アイ・トライブ",
            period: "2016年4月 - 2020年11月 ",
            location: "日本",
            description:
                "大阪大学EDGEプログラムにおける教育・イノベーション支援システムの開発プロジェクトに約5年間参画。当初はフロントエンドを担当し、その後Laravelを中心としたフルスタックとして設計・開発・運用・保守まで担当。要件定義から運用改善まで一連の開発プロセスを経験し、フルスタックとしての基盤を確立しました。",
            responsibilities: [
                "参加者管理・イベント運営・メンタリング管理など業務支援機能の継続開発",
                "Laravelによるバックエンド設計・REST API実装・MySQL設計・性能改善",
                "JavaScriptによるフロントエンド開発およびUI/UX改善",
                "運営担当者との要件整理・仕様調整・長期運用システムの安定稼働",
            ],
            technologies: [
                "PHP",
                "Laravel",
                "JavaScript",
                "MySQL",
                "HTML5",
                "CSS3",
                "Bootstrap",
                "Git",
            ],
        },
    ],
    projects: [
        {
            id: 1,
            title: "HIPCAMP（AI業務支援システム）",
            category: "AI / テックリード・準PM",
            period: "2025/07 – 2026/05",
            technologies:
                "TypeScript, C#, Python, React, SQL, AWS, Docker, LLM, RAG, OpenAI API",
            image: "/images/project-01.png",
            description:
                "生成AIを活用した業務支援システムの機能拡張。.NET / Pythonによるバックエンド、LLM・RAG基盤、ベクトル検索、プロンプト最適化、フロントエンドまでを担当。準PMとして要件整理・進捗管理も行い、自然言語で業務情報へアクセスできる仕組みを構築しました。",
        },
        {
            id: 2,
            title: "FoxFinance（Web3金融プラットフォーム）",
            category: "Web3 / テックリード",
            period: "2024/02 – 2025/06",
            technologies:
                "TypeScript, React, Web3.js, Ethers.js, REST API, SQL, AWS, Docker",
            image: "/images/project-02.png",
            description:
                "暗号資産・DeFi向けWeb3プラットフォームのフロントエンド設計・開発。MetaMask等のウォレット接続、オンチェーンデータ表示、スマートコントラクト連携を実装。終盤はリードとして設計レビュー・共通コンポーネント整備・品質管理を主導しました。",
        },
        {
            id: 3,
            title: "MediFrame Platform 機能拡張・DX推進",
            category: "医療DX / フルスタック",
            period: "2022/12 – 2024/01",
            technologies:
                "React, TypeScript, Ruby on Rails, REST API, SQL, Docker, OpenAPI",
            image: "/images/project-03.png",
            description:
                "患者・薬局・病院・製薬企業をつなぐクラウド型医療プラットフォームの機能拡張と既存刷新。フロント・バック双方を担当し、API設計・共通コンポーネント見直し・SQLチューニング・パフォーマンス改善で保守性と応答性能を向上させました。",
        },
        {
            id: 4,
            title: "MediFrame SMS（服薬フォローアップ）",
            category: "医療DX / 機能リード",
            period: "2021/09 – 2022/09",
            technologies: "Ruby on Rails, REST API, SQL, Azure DevOps, OpenAPI",
            image: "/images/project-04.png",
            description:
                "薬局から患者へ服薬指導・フォローアップをSMS配信するクラウドサービス。バックエンドAPI、SMS配信・スケジュール配信、薬局システム連携、DB設計を担当。アプリ不要で服薬アドヒアランス向上を支援する通知フローを構築しました。",
        },
        {
            id: 5,
            title: "MediFrame Platform（基盤開発・移行）",
            category: "医療DX / バックエンド",
            period: "2020/12 – 2021/09",
            technologies:
                "Node.js, Ruby on Rails, REST API, SQL, PostgreSQL, OpenAPI",
            image: "/images/project-05.png",
            description:
                "服薬管理・医療機関間情報共有の基盤システム開発。Node.jsによるREST API開発の後、Ruby on Railsへの移行に伴うAPI再設計を担当。互換性を維持しつつレイヤードアーキテクチャへ刷新し、保守性・拡張性を向上させました。",
        },
        {
            id: 6,
            title: "大阪大学EDGEプログラム支援システム",
            category: "教育 / フルスタック",
            period: "2015/10 – 2020/11",
            technologies:
                "PHP, Laravel, JavaScript, MySQL, HTML5, CSS3, Bootstrap",
            image: "/images/project-06.png",
            description:
                "起業家育成・産学連携を支える業務支援Webシステムの約5年間の開発・運用。フロントエンドからフルスタックへ領域を拡大し、参加者・イベント・メンタリング管理などの継続改善とアーキテクチャ改善を推進。その後のキャリアの基盤となりました。",
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
            title: "バックエンド / AI",
            description: "API設計からLLM・RAGまで横断する実装力",
            details:
                "Node.js / Ruby on Rails / Python / .NET によるAPI・業務ロジック設計、SQL最適化、データベース設計を得意としています。近年はOpenAI API連携、RAGアーキテクチャ、ベクトル検索、プロンプト設計など生成AIを組み込んだ業務システム開発にも注力しています。",
            tools: [
                "Node.js",
                "Ruby on Rails",
                "Python",
                "C# / .NET",
                "SQL",
                "PostgreSQL",
                "OpenAI API",
                "RAG",
                "OpenAPI",
            ],
        },
        design: {
            title: "フロントエンド / クラウド",
            description: "React中心のUIとAWS上の安定運用",
            details:
                "TypeScript / ReactによるSPA・管理画面開発、Web3ウォレット連携、AWS（EC2 / S3 / RDS）での構築・運用、Docker・GitHub Actionsによる開発基盤整備。テックリードとして設計レビュー・標準化・チーム推進にも取り組んできました。",
            tools: [
                "TypeScript",
                "React",
                "Web3.js",
                "Laravel",
                "AWS",
                "Docker",
                "Terraform",
                "GitHub Actions",
                "Jira",
            ],
        },
    },
    ui: {
        landing: {
            greeting: "はじめまして、",
            roleLine1: "フルスタックエンジニア",
            roleLine2: "テックリード",
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
            marquee: "フルスタックエンジニア / テックリード",
            marqueeAlt: "テックリード",
            loading: "読み込み中",
            welcome: "ようこそ",
        },
        resume: "職務経歴書",
        myWorks: {
            back: "← ホームに戻る",
            title: "すべての",
            titleSpan: "実績",
            subtitle: "職務経歴書に基づく主要プロジェクト",
        },
        app: {
            loading: "読み込み中...",
        },
    },
};
