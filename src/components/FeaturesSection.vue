<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Feature {
  icon: string
  titleKey: string
  descriptionKey: string
  color: string
}

const features: Feature[] = [
  {
    icon: '⚡',
    titleKey: 'features.items.speed.title',
    descriptionKey: 'features.items.speed.description',
    color: '#ff6b35'
  },
  {
    icon: '🤖',
    titleKey: 'features.items.ai.title',
    descriptionKey: 'features.items.ai.description',
    color: '#7c3aed'
  },
  {
    icon: '🔒',
    titleKey: 'features.items.security.title',
    descriptionKey: 'features.items.security.description',
    color: '#10b981'
  },
  {
    icon: '🔄',
    titleKey: 'features.items.integration.title',
    descriptionKey: 'features.items.integration.description',
    color: '#f72585'
  },
  {
    icon: '📊',
    titleKey: 'features.items.analytics.title',
    descriptionKey: 'features.items.analytics.description',
    color: '#06b6d4'
  },
  {
    icon: '🌍',
    titleKey: 'features.items.global.title',
    descriptionKey: 'features.items.global.description',
    color: '#eab308'
  }
]

const visibleItems = ref<Set<number>>(new Set())
const sectionRef = ref<HTMLElement | null>(null)

const handleScroll = () => {
  if (!sectionRef.value) return
  
  const cards = sectionRef.value.querySelectorAll('.feature-card')
  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight * 0.85
    if (isVisible) {
      visibleItems.value.add(index)
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 初始检查
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section id="features" class="features" ref="sectionRef">
    <div class="container">
      <!-- 章节标题 -->
      <div class="section-header">
        <span class="section-label">{{ t('features.label') }}</span>
        <h2 class="section-title">
          {{ t('features.title') }}<span class="gradient-text">{{ t('features.titleHighlight') }}</span>
        </h2>
        <p class="section-subtitle">
          {{ t('features.subtitle') }}
        </p>
      </div>

      <!-- 功能卡片网格 -->
      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.titleKey"
          class="feature-card"
          :class="{ visible: visibleItems.has(index) }"
          :style="{ '--delay': `${index * 0.1}s`, '--accent-color': feature.color }"
        >
          <div class="card-glow"></div>
          <div class="card-content">
            <div class="feature-icon">
              <span>{{ feature.icon }}</span>
            </div>
            <h3 class="feature-title">{{ t(feature.titleKey) }}</h3>
            <p class="feature-description">{{ t(feature.descriptionKey) }}</p>
            <a href="#" class="feature-link">
              <span>{{ t('features.learnMore') }}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- 底部 CTA -->
      <div class="features-cta">
        <p class="cta-text">{{ t('features.cta.text') }}</p>
        <a href="#" class="btn btn-secondary">
          {{ t('features.cta.button') }}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.features {
  padding: var(--spacing-3xl) 0;
  position: relative;

  &-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);

    @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 640px) { grid-template-columns: 1fr; }
  }

  &-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-lg);
    margin-top: var(--spacing-2xl);
    padding-top: var(--spacing-2xl);
    border-top: 1px solid var(--color-border);

    @media (max-width: 640px) {
      flex-direction: column;
      gap: var(--spacing-md);
    }
  }
}

.section {
  &-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
  }

  &-label {
    display: inline-block;
    padding: 0.375rem 1rem;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--color-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--spacing-md);
  }
}

.feature {
  &-card {
    position: relative;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    transition: all var(--transition-normal);
    opacity: 0;
    transform: translateY(40px);
    overflow: hidden;

    &.visible {
      opacity: 1;
      transform: translateY(0);
      transition-delay: var(--delay);
    }

    &:hover {
      border-color: var(--accent-color);
      transform: translateY(-4px);

      .card-glow { opacity: 1; }
      .feature-icon {
        transform: scale(1.1);
        border-color: var(--accent-color);
        box-shadow: 0 0 30px rgba(255, 107, 53, 0.2);
      }
    }
  }

  &-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, var(--color-bg-tertiary) 0%, var(--color-bg-secondary) 100%);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
    transition: all var(--transition-normal);
  }

  &-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-primary);
  }

  &-description {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: var(--spacing-md);
  }

  &-link {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-muted);
    transition: all var(--transition-fast);

    svg { transition: transform var(--transition-fast); }

    &:hover {
      color: var(--accent-color);
      svg { transform: translateX(4px); }
    }
  }
}

.card {
  &-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    opacity: 0;
    transition: opacity var(--transition-normal);
  }

  &-content {
    position: relative;
    z-index: 1;
  }
}

.cta-text {
  font-size: 1rem;
  color: var(--color-text-secondary);
}
</style>
