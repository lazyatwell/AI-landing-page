<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

// 获取评价列表
const testimonials = computed(() => {
  const items = tm('testimonials.items') as Array<{
    content: string
    author: string
    role: string
    company: string
  }>
  return items.map((item, index) => ({
    ...item,
    avatar: ['👨‍💼', '👩‍💻', '👨‍💻'][index] || '👤',
    rating: 5
  }))
})

const currentIndex = ref(0)
let intervalId: ReturnType<typeof setInterval> | null = null

const goToSlide = (index: number) => {
  currentIndex.value = index
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <section id="testimonials" class="testimonials">
    <!-- 背景装饰 -->
    <div class="testimonials-bg">
      <div class="quote-mark left">"</div>
      <div class="quote-mark right">"</div>
    </div>

    <div class="container">
      <!-- 章节标题 -->
      <div class="section-header">
        <span class="section-label">{{ t('testimonials.label') }}</span>
        <h2 class="section-title">
          {{ t('testimonials.title') }}<span class="gradient-text">{{ t('testimonials.titleHighlight') }}</span>{{ t('testimonials.titleEnd') }}
        </h2>
        <p class="section-subtitle">
          {{ t('testimonials.subtitle') }}
        </p>
      </div>

      <!-- 评价轮播 -->
      <div class="testimonials-carousel">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="testimonial-slide"
          >
            <div class="testimonial-card">
              <!-- 评分 -->
              <div class="rating">
                <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= testimonial.rating }">★</span>
              </div>
              
              <!-- 内容 -->
              <blockquote class="testimonial-content">
                {{ testimonial.content }}
              </blockquote>

              <!-- 作者信息 -->
              <div class="testimonial-author">
                <div class="author-avatar">
                  <span>{{ testimonial.avatar }}</span>
                </div>
                <div class="author-info">
                  <span class="author-name">{{ testimonial.author }}</span>
                  <span class="author-role">{{ testimonial.role }} · {{ testimonial.company }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 指示器 -->
        <div class="carousel-indicators">
          <button 
            v-for="(_, index) in testimonials"
            :key="index"
            class="indicator"
            :class="{ active: index === currentIndex }"
            @click="goToSlide(index)"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>
      </div>

      <!-- 客户 Logo -->
      <div class="client-logos">
        <p class="logos-title">{{ t('testimonials.clientsTitle') }}</p>
        <div class="logos-grid">
          <div class="logo-item">
            <svg viewBox="0 0 100 30" fill="currentColor">
              <text x="50" y="22" text-anchor="middle" font-size="14" font-weight="bold">ByteDance</text>
            </svg>
          </div>
          <div class="logo-item">
            <svg viewBox="0 0 100 30" fill="currentColor">
              <text x="50" y="22" text-anchor="middle" font-size="14" font-weight="bold">Alibaba</text>
            </svg>
          </div>
          <div class="logo-item">
            <svg viewBox="0 0 100 30" fill="currentColor">
              <text x="50" y="22" text-anchor="middle" font-size="14" font-weight="bold">Tencent</text>
            </svg>
          </div>
          <div class="logo-item">
            <svg viewBox="0 0 100 30" fill="currentColor">
              <text x="50" y="22" text-anchor="middle" font-size="14" font-weight="bold">Huawei</text>
            </svg>
          </div>
          <div class="logo-item">
            <svg viewBox="0 0 100 30" fill="currentColor">
              <text x="50" y="22" text-anchor="middle" font-size="14" font-weight="bold">Xiaomi</text>
            </svg>
          </div>
          <div class="logo-item">
            <svg viewBox="0 0 100 30" fill="currentColor">
              <text x="50" y="22" text-anchor="middle" font-size="14" font-weight="bold">JD.com</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  padding: var(--spacing-3xl) 0;
  position: relative;
  overflow: hidden;

  &-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &-carousel {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
  }
}

.quote-mark {
  position: absolute;
  font-family: var(--font-display);
  font-size: 20rem;
  line-height: 1;
  color: var(--color-bg-tertiary);
  opacity: 0.5;

  &.left { top: 0; left: 5%; }
  &.right { bottom: 0; right: 5%; transform: rotate(180deg); }

  @media (max-width: 768px) { font-size: 10rem; }
}

.section {
  &-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
    position: relative;
    z-index: 1;
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

.carousel {
  &-track {
    display: flex;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &-indicators {
    display: flex;
    justify-content: center;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-xl);
  }
}

.testimonial {
  &-slide {
    flex: 0 0 100%;
    padding: 0 var(--spacing-md);
  }

  &-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    text-align: center;
  }

  &-content {
    font-family: var(--font-display);
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    font-weight: 400;
    font-style: italic;
    line-height: 1.6;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-xl);
  }

  &-author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-md);

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }
}

.rating {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: var(--spacing-md);
}

.star {
  font-size: 1.25rem;
  color: var(--color-text-muted);

  &.filled { color: #eab308; }
}

.author {
  &-avatar {
    width: 56px;
    height: 56px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }

  &-info {
    display: flex;
    flex-direction: column;
    text-align: left;

    @media (max-width: 768px) { text-align: center; }
  }

  &-name {
    font-weight: 600;
    color: var(--color-text-primary);
  }

  &-role {
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }
}

.indicator {
  width: 40px;
  height: 4px;
  background: var(--color-bg-tertiary);
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-normal);

  &.active {
    background: var(--gradient-primary);
    width: 60px;
  }

  &:hover:not(.active) {
    background: var(--color-text-muted);
  }
}

.client-logos {
  margin-top: var(--spacing-3xl);
  text-align: center;
}

.logos {
  &-title {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: var(--spacing-lg);
  }

  &-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-xl);

    @media (max-width: 768px) { gap: var(--spacing-lg); }
  }
}

.logo-item {
  width: 120px;
  height: 40px;
  color: var(--color-text-muted);
  opacity: 0.6;
  transition: all var(--transition-normal);

  svg { width: 100%; height: 100%; }

  &:hover {
    opacity: 1;
    color: var(--color-text-secondary);
  }

  @media (max-width: 768px) { width: 100px; }
}
</style>
