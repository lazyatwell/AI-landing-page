<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isVisible = ref(false)

// 统计数据
const statsData = computed(() => [
  { value: '50K+', labelKey: 'hero.stats.teams' },
  { value: '99.9%', labelKey: 'hero.stats.uptime' },
  { value: '200+', labelKey: 'hero.stats.enterprise' },
])

onMounted(() => {
  // 触发进入动画
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="hero">
    <!-- 背景装饰 -->
    <div class="hero-bg">
      <div class="grid-bg"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>

    <div class="container hero-container" :class="{ visible: isVisible }">
      <!-- 标签 -->
      <div class="hero-badge">
        <span class="badge-icon">✨</span>
        <span>{{ t('hero.badge') }}</span>
        <svg class="badge-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <!-- 主标题 -->
      <h1 class="hero-title">
        <span class="title-line">{{ t('hero.title.line1') }}</span>
        <span class="title-line gradient-text">{{ t('hero.title.line2') }}</span>
        <span class="title-line">{{ t('hero.title.line3') }}</span>
      </h1>

      <!-- 副标题 -->
      <p class="hero-subtitle">
        {{ t('hero.subtitle') }}<br class="hide-mobile">
        {{ t('hero.subtitleHighlight') }} <span class="highlight">{{ t('hero.efficiency') }}</span>
      </p>

      <!-- CTA 按钮组 -->
      <div class="hero-actions">
        <a href="#pricing" class="btn btn-primary btn-lg">
          <span>{{ t('hero.cta.primary') }}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#features" class="btn btn-secondary btn-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 10l4-2.5v5L8 10z" fill="currentColor"/>
          </svg>
          <span>{{ t('hero.cta.secondary') }}</span>
        </a>
      </div>

      <!-- 统计数据 -->
      <div class="hero-stats">
        <div 
          v-for="(stat, index) in statsData" 
          :key="stat.labelKey"
          class="stat-item"
          :style="{ animationDelay: `${0.8 + index * 0.1}s` }"
        >
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ t(stat.labelKey) }}</span>
        </div>
      </div>

      <!-- 产品预览 -->
      <div class="hero-preview">
        <div class="preview-window">
          <div class="window-header">
            <div class="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="window-title">{{ t('hero.dashboard') }}</div>
            <div class="window-actions">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
          </div>
          <div class="window-content">
            <!-- 模拟仪表盘内容 -->
            <div class="dashboard-mock">
              <div class="sidebar-mock">
                <div class="sidebar-item active"></div>
                <div class="sidebar-item"></div>
                <div class="sidebar-item"></div>
                <div class="sidebar-item"></div>
              </div>
              <div class="main-mock">
                <div class="chart-mock">
                  <svg viewBox="0 0 200 80" class="chart-svg">
                    <defs>
                      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="rgba(255, 107, 53, 0.4)"/>
                        <stop offset="100%" stop-color="rgba(255, 107, 53, 0)"/>
                      </linearGradient>
                    </defs>
                    <path 
                      d="M0,60 Q20,55 40,45 T80,35 T120,50 T160,25 T200,40 V80 H0 Z" 
                      fill="url(#chartGrad)"
                    />
                    <path 
                      d="M0,60 Q20,55 40,45 T80,35 T120,50 T160,25 T200,40" 
                      fill="none" 
                      stroke="var(--color-primary)" 
                      stroke-width="2"
                      class="chart-line"
                    />
                  </svg>
                </div>
                <div class="cards-mock">
                  <div class="card-mock"></div>
                  <div class="card-mock"></div>
                  <div class="card-mock"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 发光效果 -->
        <div class="preview-glow"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 100vh;
  padding: calc(80px + var(--spacing-3xl)) 0 var(--spacing-3xl);
  overflow: hidden;

  &-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > * {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    &.visible > * {
      opacity: 1;
      transform: translateY(0);

      @for $i from 1 through 6 {
        &:nth-child(#{$i}) { transition-delay: #{$i * 0.1}s; }
      }
    }
  }

  &-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    padding: 0.5rem 1rem;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-lg);
    transition: all var(--transition-normal);
    cursor: pointer;

    &:hover {
      border-color: var(--color-primary);
      color: var(--color-text-primary);

      .badge-arrow { transform: translateX(2px); }
    }
  }

  &-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: var(--spacing-lg);
  }

  &-subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--color-text-secondary);
    max-width: 600px;
    margin-bottom: var(--spacing-xl);
    line-height: 1.7;
  }

  &-actions {
    display: flex;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-2xl);
    flex-wrap: wrap;
    justify-content: center;
  }

  &-stats {
    display: flex;
    gap: var(--spacing-2xl);
    margin-bottom: var(--spacing-2xl);
    flex-wrap: wrap;
    justify-content: center;
  }

  &-preview {
    position: relative;
    width: 100%;
    max-width: 1000px;
  }

  @media (max-width: 768px) {
    padding-top: calc(60px + var(--spacing-2xl));

    &-stats { gap: var(--spacing-xl); }

    &-actions {
      flex-direction: column;
      width: 100%;
      max-width: 300px;

      .btn { width: 100%; }
    }
  }
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);

  &-1 {
    width: 600px;
    height: 600px;
    background: rgba(255, 107, 53, 0.15);
    top: -200px;
    left: -100px;
    animation: pulse 8s ease-in-out infinite;
  }

  &-2 {
    width: 500px;
    height: 500px;
    background: rgba(247, 37, 133, 0.12);
    bottom: -100px;
    right: -100px;
    animation: pulse 8s ease-in-out infinite 2s;
  }
}

.floating-shapes { position: absolute; inset: 0; }

.shape {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--color-border);

  &-1 { width: 300px; height: 300px; top: 20%; right: 10%; animation: float-slow 15s ease-in-out infinite; }
  &-2 { width: 150px; height: 150px; bottom: 30%; left: 5%; animation: float-slow 12s ease-in-out infinite 3s; }
  &-3 { width: 80px; height: 80px; top: 40%; left: 20%; animation: float-slow 10s ease-in-out infinite 5s; }
}

.badge-icon { font-size: 1rem; }
.badge-arrow { transition: transform var(--transition-fast); }
.title-line { display: block; }
.highlight { color: var(--color-primary); font-weight: 600; }
.btn-lg { padding: 1rem 2.5rem; font-size: 1rem; }

.stat {
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xs);
  }

  &-value {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) { font-size: 1.5rem; }
  }

  &-label {
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }
}

.preview {
  &-window {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }

  &-glow {
    position: absolute;
    bottom: -50%;
    left: 10%;
    right: 10%;
    height: 100%;
    background: radial-gradient(ellipse at center, rgba(255, 107, 53, 0.2) 0%, transparent 70%);
    filter: blur(60px);
    pointer-events: none;
  }
}

.window {
  &-header {
    display: flex;
    align-items: center;
    padding: var(--spacing-sm) var(--spacing-md);
    background: var(--color-bg-tertiary);
    border-bottom: 1px solid var(--color-border);
  }

  &-dots {
    display: flex;
    gap: 6px;

    span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--color-bg-primary);
      border: 1px solid var(--color-border);

      &:nth-child(1) { background: #ff5f57; border-color: #e0443e; }
      &:nth-child(2) { background: #febc2e; border-color: #dea123; }
      &:nth-child(3) { background: #28c840; border-color: #1aab29; }
    }
  }

  &-title { flex: 1; text-align: center; font-size: 0.8125rem; color: var(--color-text-muted); }
  &-actions { color: var(--color-text-muted); }
  &-content { aspect-ratio: 16/9; padding: var(--spacing-md); }
}

.dashboard-mock { display: flex; gap: var(--spacing-md); height: 100%; }

.sidebar {
  &-mock {
    width: 60px;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);

    @media (max-width: 768px) { display: none; }
  }

  &-item {
    height: 40px;
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border);

    &.active {
      background: var(--gradient-primary);
      border-color: transparent;
    }
  }
}

.main-mock {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.chart {
  &-mock {
    flex: 1;
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    padding: var(--spacing-md);
    display: flex;
    align-items: flex-end;
  }

  &-svg { width: 100%; height: 80px; }

  &-line {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: drawLine 2s ease forwards 1s;
  }
}

.cards-mock { display: flex; gap: var(--spacing-md); }

.card-mock {
  flex: 1;
  height: 80px;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

// Animations
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(20px, -20px) rotate(5deg); }
  66% { transform: translate(-10px, 10px) rotate(-3deg); }
}

@keyframes drawLine {
  to { stroke-dashoffset: 0; }
}
</style>
