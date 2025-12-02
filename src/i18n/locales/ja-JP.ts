export default {
  // ナビゲーション
  nav: {
    features: '機能',
    testimonials: 'お客様の声',
    pricing: '料金',
    login: 'ログイン',
    getStarted: '始める'
  },

  // ヒーローセクション
  hero: {
    badge: '新バージョン 3.0 リリース',
    title: {
      line1: '再定義する',
      line2: 'チームコラボレーション',
      line3: 'の未来'
    },
    subtitle: 'Nexusはプロジェクト管理、リアルタイムコラボレーション、AIアシスタントを完璧に統合し、',
    subtitleHighlight: 'チームの効率を',
    efficiency: '300%',
    cta: {
      primary: '無料で始める',
      secondary: 'デモを見る'
    },
    stats: {
      teams: 'アクティブチーム',
      uptime: '稼働率',
      enterprise: '企業顧客'
    },
    dashboard: 'Nexus ダッシュボード'
  },

  // 機能
  features: {
    label: '機能',
    title: 'モダンチームのために',
    titleHighlight: '設計',
    subtitle: 'すべての機能は、チームをより効率的かつ集中させるために細心の注意を払って設計されています',
    learnMore: '詳細を見る',
    cta: {
      text: 'もっと詳しく知りたいですか？',
      button: '全機能を見る'
    },
    items: {
      speed: {
        title: '超高速',
        description: 'Edge Runtime技術に基づき、グローバル展開でミリ秒単位のレスポンス'
      },
      ai: {
        title: 'AIアシスタント',
        description: 'GPT-4搭載のAIが会議メモやタスク割り当てを自動生成'
      },
      security: {
        title: 'エンタープライズセキュリティ',
        description: 'SOC 2 Type II認証、エンドツーエンド暗号化、GDPR準拠'
      },
      integration: {
        title: 'シームレス連携',
        description: 'Slack、Notion、GitHubなど100以上のツールと連携'
      },
      analytics: {
        title: 'データインサイト',
        description: 'チーム効率の可視化レポート、ボトルネックの特定、データ駆動の意思決定'
      },
      global: {
        title: 'グローバルコラボ',
        description: 'リアルタイム共同編集、ビデオ会議、タイムゾーンを超えた非同期コミュニケーション'
      }
    }
  },

  // お客様の声
  testimonials: {
    label: 'お客様の声',
    title: '',
    titleHighlight: '50,000以上',
    titleEnd: 'のチームに信頼されています',
    subtitle: '世界トップ企業からの実際のフィードバック',
    clientsTitle: 'Nexusを使用している企業',
    items: [
      {
        content: 'Nexusを使い始めてから、チームのコラボレーション効率が3倍になりました。AIアシスタントは素晴らしく、会議メモを自動で整理してくれます。',
        author: '田中 明',
        role: 'プロダクトディレクター',
        company: 'ByteDance'
      },
      {
        content: 'リモートチームとして、Nexusはタイムゾーンを超えたコラボレーションの課題を完璧に解決してくれました。',
        author: '佐藤 花子',
        role: 'テックリード',
        company: 'Alibaba Cloud'
      },
      {
        content: 'データセキュリティは常に最大の関心事でした。Nexusのエンタープライズ級セキュリティ認証で安心です。',
        author: '鈴木 太郎',
        role: 'CTO',
        company: 'Tencent'
      }
    ]
  },

  // 料金
  pricing: {
    label: '料金プラン',
    title: 'あなたに最適な',
    titleHighlight: 'プラン',
    subtitle: '個人開発者から大企業まで、最適なプランをご用意しています',
    billing: {
      monthly: '月払い',
      yearly: '年払い',
      discount: '20%オフ'
    },
    plans: {
      starter: {
        name: 'スターター',
        description: '小規模チームに最適',
        price: '¥0',
        period: '永久無料',
        cta: '無料で始める',
        features: [
          '最大5名',
          '基本的なプロジェクト管理',
          '5GBストレージ',
          'コミュニティサポート',
          '基本レポート'
        ]
      },
      pro: {
        name: 'プロフェッショナル',
        description: '成長中のチーム向け',
        price: '¥1,500',
        period: 'ユーザー/月',
        cta: 'アップグレード',
        badge: '人気No.1',
        features: [
          '無制限メンバー',
          '高度なプロジェクト管理',
          '100GBストレージ',
          'AIアシスタント',
          '優先サポート',
          '高度な分析',
          'APIアクセス'
        ]
      },
      enterprise: {
        name: 'エンタープライズ',
        description: '大企業向けカスタム',
        price: 'カスタム',
        period: 'お問い合わせください',
        cta: '営業に連絡',
        features: [
          '無制限のすべて',
          '専任アカウントマネージャー',
          'カスタムデプロイ',
          'SLA保証',
          'SSOログイン',
          '監査ログ',
          'カスタム開発'
        ]
      }
    },
    guarantees: {
      secure: '安全な支払い',
      refund: '14日間返金保証',
      support: '24時間サポート'
    }
  },

  // フッター
  footer: {
    cta: {
      title: 'チームの効率を向上させる準備はできましたか？',
      subtitle: '50,000以上のチームに参加して、旅を始めましょう',
      primary: '無料で始める',
      secondary: 'デモを予約'
    },
    brand: {
      description: 'チームコラボレーションの未来を再定義。すべてのチームが最大の可能性を発揮できるように。'
    },
    links: {
      product: {
        title: '製品',
        items: {
          features: '機能',
          pricing: '料金',
          changelog: '更新履歴',
          api: 'APIドキュメント',
          integrations: '連携'
        }
      },
      company: {
        title: '会社',
        items: {
          about: '会社概要',
          team: 'チーム',
          careers: '採用情報',
          news: 'ニュース',
          contact: 'お問い合わせ'
        }
      },
      resources: {
        title: 'リソース',
        items: {
          help: 'ヘルプセンター',
          guides: 'ユーザーガイド',
          community: 'コミュニティ',
          blog: 'ブログ',
          status: 'ステータス'
        }
      },
      legal: {
        title: '法的情報',
        items: {
          privacy: 'プライバシーポリシー',
          terms: '利用規約',
          cookies: 'Cookieポリシー',
          security: 'セキュリティ'
        }
      }
    },
    bottom: {
      copyright: '© {year} Nexus. All rights reserved.',
      privacy: 'プライバシー',
      terms: '利用規約',
      cookies: 'Cookie設定'
    }
  },

  // テーマ
  theme: {
    light: 'ライトモード',
    dark: 'ダークモード',
    toggle: 'テーマ切替'
  },

  // 言語
  language: {
    zhCN: '简体中文',
    enUS: 'English',
    jaJP: '日本語'
  }
}

