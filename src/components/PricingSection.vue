<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const billingCycle = ref<'monthly' | 'yearly'>('monthly')
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

// 获取定价方案
const plans = computed(() => [
  {
    key: 'starter',
    highlighted: false,
    features: tm('pricing.plans.starter.features') as string[]
  },
  {
    key: 'pro',
    highlighted: true,
    features: tm('pricing.plans.pro.features') as string[]
  },
  {
    key: 'enterprise',
    highlighted: false,
    features: tm('pricing.plans.enterprise.features') as string[]
  }
])

const handleScroll = () => {
  if (!sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  if (rect.top < window.innerHeight * 0.8) {
    isVisible.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section id="pricing" class="pricing" ref="sectionRef">
    <!-- 背景装饰 -->
    <div class="pricing-bg">
      <div class="glow glow-left"></div>
      <div class="glow glow-right"></div>
    </div>

    <div class="container">
      <!-- 章节标题 -->
      <div class="section-header" :class="{ visible: isVisible }">
        <span class="section-label">{{ t('pricing.label') }}</span>
        <h2 class="section-title">
          {{ t('pricing.title') }}<span class="gradient-text">{{ t('pricing.titleHighlight') }}</span>
        </h2>
        <p class="section-subtitle">
          {{ t('pricing.subtitle') }}
        </p>
      </div>

      <!-- 计费周期切换 -->
      <div class="billing-toggle" :class="{ visible: isVisible }">
        <button 
          class="toggle-btn" 
          :class="{ active: billingCycle === 'monthly' }"
          @click="billingCycle = 'monthly'"
        >
          {{ t('pricing.billing.monthly') }}
        </button>
        <button 
          class="toggle-btn" 
          :class="{ active: billingCycle === 'yearly' }"
          @click="billingCycle = 'yearly'"
        >
          {{ t('pricing.billing.yearly') }}
          <span class="discount-badge">{{ t('pricing.billing.discount') }}</span>
        </button>
      </div>

      <!-- 定价卡片 -->
      <div class="pricing-grid">
        <div 
          v-for="(plan, index) in plans" 
          :key="plan.key"
          class="pricing-card"
          :class="{ 
            highlighted: plan.highlighted, 
            visible: isVisible 
          }"
          :style="{ '--delay': `${0.2 + index * 0.15}s` }"
        >
          <!-- 推荐标签 -->
          <div v-if="plan.highlighted" class="card-badge">
            <span>{{ t(`pricing.plans.${plan.key}.badge`) }}</span>
          </div>

          <!-- 发光边框 -->
          <div v-if="plan.highlighted" class="glow-border"></div>

          <div class="card-content">
            <!-- 方案名称 -->
            <div class="plan-header">
              <h3 class="plan-name">{{ t(`pricing.plans.${plan.key}.name`) }}</h3>
              <p class="plan-description">{{ t(`pricing.plans.${plan.key}.description`) }}</p>
            </div>

            <!-- 价格 -->
            <div class="plan-price">
              <span class="price-amount">{{ t(`pricing.plans.${plan.key}.price`) }}</span>
              <span class="price-period">{{ t(`pricing.plans.${plan.key}.period`) }}</span>
            </div>

            <!-- CTA 按钮 -->
            <a 
              href="#" 
              class="btn"
              :class="plan.highlighted ? 'btn-primary' : 'btn-secondary'"
            >
              {{ t(`pricing.plans.${plan.key}.cta`) }}
            </a>

            <!-- 功能列表 -->
            <ul class="features-list">
              <li v-for="feature in plan.features" :key="feature" class="feature-item">
                <svg class="check-icon" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.1"/>
                  <path d="M6 10l3 3 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 底部保障 -->
      <div class="pricing-footer" :class="{ visible: isVisible }">
        <div class="guarantee-items">
          <div class="guarantee-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{ t('pricing.guarantees.secure') }}</span>
          </div>
          <div class="guarantee-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{ t('pricing.guarantees.refund') }}</span>
          </div>
          <div class="guarantee-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{ t('pricing.guarantees.support') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pricing {
  padding: var(--spacing-3xl) 0;
  position: relative;
  overflow: hidden;

  &-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
    align-items: stretch;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }

  &-card {
    position: relative;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    transition: all var(--transition-normal);
    opacity: 0;
    transform: translateY(40px);

    &.visible {
      opacity: 1;
      transform: translateY(0);
      transition-delay: var(--delay);

      &:hover { transform: translateY(-8px); }
    }

    &:hover {
      border-color: var(--color-border-hover);
      transform: translateY(-8px);
    }

    &.highlighted {
      background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 37, 133, 0.05) 100%);
      border-color: var(--color-primary);
      transform: scale(1.02);

      &.visible:hover { transform: scale(1.02) translateY(-8px); }
    }

    &:last-child {
      @media (max-width: 1024px) {
        grid-column: span 2;
        max-width: 400px;
        margin: 0 auto;
      }

      @media (max-width: 640px) {
        grid-column: auto;
        max-width: none;
      }
    }
  }

  &-footer {
    margin-top: var(--spacing-2xl);
    padding-top: var(--spacing-xl);
    border-top: 1px solid var(--color-border);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(120px);

  &-left { background: rgba(255, 107, 53, 0.1); top: 20%; left: -10%; }
  &-right { background: rgba(247, 37, 133, 0.1); bottom: 20%; right: -10%; }

  &-border {
    position: absolute;
    inset: -1px;
    background: var(--gradient-primary);
    border-radius: var(--radius-lg);
    opacity: 0.5;
    filter: blur(20px);
    z-index: -1;
  }
}

.section {
  &-header {
    text-align: center;
    margin-bottom: var(--spacing-xl);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
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

.billing-toggle {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-2xl);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.75rem 1.5rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    border-color: var(--color-border-hover);
    color: var(--color-text-primary);
  }

  &.active {
    background: var(--gradient-primary);
    border-color: transparent;
    color: white;
  }

  &:not(.active) .discount-badge {
    background: var(--color-primary);
    color: white;
  }
}

.discount-badge {
  padding: 0.125rem 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
}

.card {
  &-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.375rem 1rem;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    white-space: nowrap;
  }

  &-content {
    position: relative;
    z-index: 1;

    .btn {
      width: 100%;
      margin-bottom: var(--spacing-lg);
    }
  }
}

.plan {
  &-header { margin-bottom: var(--spacing-md); }

  &-name {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
  }

  &-description {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
  }

  &-price { margin-bottom: var(--spacing-lg); }
}

.price {
  &-amount {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &-period {
    display: block;
    font-size: 0.875rem;
    color: var(--color-text-muted);
    margin-top: var(--spacing-xs);
  }
}

.features-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
}

.check-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-primary);
}

.guarantee {
  &-items {
    display: flex;
    justify-content: center;
    gap: var(--spacing-2xl);
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-md);
    }
  }

  &-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: 0.9375rem;
    color: var(--color-text-secondary);

    svg {
      width: 24px;
      height: 24px;
      color: var(--color-primary);
    }
  }
}
</style>
