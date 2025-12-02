<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 页脚链接分组
const footerSections = computed(() => [
  {
    titleKey: 'footer.links.product.title',
    links: [
      { nameKey: 'footer.links.product.items.features', href: '#features' },
      { nameKey: 'footer.links.product.items.pricing', href: '#pricing' },
      { nameKey: 'footer.links.product.items.changelog', href: '#' },
      { nameKey: 'footer.links.product.items.api', href: '#' },
      { nameKey: 'footer.links.product.items.integrations', href: '#' }
    ]
  },
  {
    titleKey: 'footer.links.company.title',
    links: [
      { nameKey: 'footer.links.company.items.about', href: '#' },
      { nameKey: 'footer.links.company.items.team', href: '#' },
      { nameKey: 'footer.links.company.items.careers', href: '#' },
      { nameKey: 'footer.links.company.items.news', href: '#' },
      { nameKey: 'footer.links.company.items.contact', href: '#' }
    ]
  },
  {
    titleKey: 'footer.links.resources.title',
    links: [
      { nameKey: 'footer.links.resources.items.help', href: '#' },
      { nameKey: 'footer.links.resources.items.guides', href: '#' },
      { nameKey: 'footer.links.resources.items.community', href: '#' },
      { nameKey: 'footer.links.resources.items.blog', href: '#' },
      { nameKey: 'footer.links.resources.items.status', href: '#' }
    ]
  },
  {
    titleKey: 'footer.links.legal.title',
    links: [
      { nameKey: 'footer.links.legal.items.privacy', href: '#' },
      { nameKey: 'footer.links.legal.items.terms', href: '#' },
      { nameKey: 'footer.links.legal.items.cookies', href: '#' },
      { nameKey: 'footer.links.legal.items.security', href: '#' }
    ]
  }
])

interface SocialLink {
  name: string
  icon: string
  href: string
}

const socialLinks: SocialLink[] = [
  { name: 'GitHub', icon: 'github', href: '#' },
  { name: 'Twitter', icon: 'twitter', href: '#' },
  { name: 'Discord', icon: 'discord', href: '#' },
  { name: 'WeChat', icon: 'wechat', href: '#' }
]

const currentYear = new Date().getFullYear()

// 格式化版权信息
const copyrightText = computed(() => {
  return t('footer.bottom.copyright', { year: currentYear })
})
</script>

<template>
  <footer class="footer">
    <!-- 顶部 CTA 区域 -->
    <div class="footer-cta">
      <div class="container">
        <div class="cta-content">
          <div class="cta-text">
            <h2 class="cta-title">
              {{ t('footer.cta.title') }}
            </h2>
            <p class="cta-subtitle">
              {{ t('footer.cta.subtitle') }}
            </p>
          </div>
          <div class="cta-actions">
            <a href="#pricing" class="btn btn-primary btn-lg">
              <span>{{ t('footer.cta.primary') }}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#" class="btn btn-secondary btn-lg">
              {{ t('footer.cta.secondary') }}
            </a>
          </div>
        </div>
        <!-- 装饰元素 -->
        <div class="cta-decoration">
          <div class="decoration-circle circle-1"></div>
          <div class="decoration-circle circle-2"></div>
        </div>
      </div>
    </div>

    <!-- 主要内容区 -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Logo 和描述 -->
          <div class="footer-brand">
            <a href="#" class="footer-logo">
              <div class="logo-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="url(#footerLogoGrad)" />
                  <path d="M14 28V12h3l8 10.5V12h3v16h-3L17 17.5V28h-3z" fill="white" />
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="40" y2="40">
                      <stop stop-color="#ff6b35" />
                      <stop offset="1" stop-color="#f72585" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span class="logo-text">Nexus</span>
            </a>
            <p class="brand-description">
              {{ t('footer.brand.description') }}
            </p>
            
            <!-- 社交媒体链接 -->
            <div class="social-links">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.href"
                class="social-link"
                :aria-label="social.name"
              >
                <!-- GitHub -->
                <svg v-if="social.icon === 'github'" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <!-- Twitter -->
                <svg v-if="social.icon === 'twitter'" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <!-- Discord -->
                <svg v-if="social.icon === 'discord'" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
                </svg>
                <!-- WeChat -->
                <svg v-if="social.icon === 'wechat'" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.139.045c.133 0 .241-.108.241-.243 0-.06-.023-.118-.039-.177l-.326-1.233a.49.49 0 01.177-.553C23.186 18.486 24 16.952 24 15.186c0-3.536-3.149-6.357-7.062-6.328zm-2.749 2.142c.535 0 .969.44.969.983a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.543.433-.983.97-.983zm4.844 0c.535 0 .969.44.969.983a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.543.434-.983.969-.983z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- 链接分组 -->
          <div 
            v-for="section in footerSections" 
            :key="section.titleKey"
            class="footer-section"
          >
            <h3 class="section-title">{{ t(section.titleKey) }}</h3>
            <ul class="section-links">
              <li v-for="link in section.links" :key="link.nameKey">
                <a :href="link.href" class="section-link">
                  {{ t(link.nameKey) }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部版权区 -->
    <div class="footer-bottom">
      <div class="container">
        <div class="bottom-content">
          <p class="copyright">
            {{ copyrightText }}
          </p>
          <div class="bottom-links">
            <a href="#">{{ t('footer.bottom.privacy') }}</a>
            <span class="divider">·</span>
            <a href="#">{{ t('footer.bottom.terms') }}</a>
            <span class="divider">·</span>
            <a href="#">{{ t('footer.bottom.cookies') }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: relative;
  background: var(--color-bg-secondary);
  margin-top: var(--spacing-3xl);

  &-cta {
    position: relative;
    padding: var(--spacing-3xl) 0;
    background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 37, 133, 0.05) 100%);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    overflow: hidden;
  }

  &-main {
    padding: var(--spacing-3xl) 0;
  }

  &-grid {
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    gap: var(--spacing-xl);

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-lg);
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }

  &-brand {
    max-width: 300px;

    @media (max-width: 1024px) {
      grid-column: span 2;
      margin-bottom: var(--spacing-lg);
    }

    @media (max-width: 640px) {
      grid-column: auto;
    }
  }

  &-logo {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);

    &:hover { color: var(--color-text-primary); }
  }

  &-section {
    min-width: 0;

    .section-title {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-text-primary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: var(--spacing-md);
    }
  }

  &-bottom {
    padding: var(--spacing-lg) 0;
    border-top: 1px solid var(--color-border);
  }
}

.cta {
  &-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--spacing-lg);
  }

  &-title {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
  }

  &-subtitle {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
  }

  &-actions {
    display: flex;
    gap: var(--spacing-md);
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      max-width: 300px;

      .btn { width: 100%; }
    }
  }

  &-decoration {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--color-border);
}

.circle {
  &-1 { width: 400px; height: 400px; top: -200px; right: -100px; opacity: 0.5; }
  &-2 { width: 300px; height: 300px; bottom: -150px; left: -50px; opacity: 0.3; }
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1rem;
}

.logo {
  &-icon {
    width: 40px;
    height: 40px;
    svg { width: 100%; height: 100%; }
  }

  &-text {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
  }
}

.brand-description {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

.social {
  &-links {
    display: flex;
    gap: var(--spacing-sm);
  }

  &-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text-muted);
    transition: all var(--transition-normal);

    svg { width: 20px; height: 20px; }

    &:hover {
      background: var(--color-primary);
      border-color: var(--color-primary);
      color: white;
      transform: translateY(-2px);
    }
  }
}

.section {
  &-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  &-link {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    transition: all var(--transition-fast);
    display: inline-block;

    &:hover {
      color: var(--color-primary);
      transform: translateX(4px);
    }
  }
}

.bottom {
  &-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--spacing-md);

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }

  &-links {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: 0.875rem;

    a {
      color: var(--color-text-muted);
      &:hover { color: var(--color-text-primary); }
    }
  }
}

.copyright {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.divider {
  color: var(--color-text-muted);
}
</style>
