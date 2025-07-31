import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const usePresentationStore = create(
  persist(
    (set, get) => ({
      // Slide state
      currentSlide: 0,
      totalSlides: 0,
      isPresenting: false,
      
      // Navigation state
      showTOC: false,
      showHelp: false,
      showSpeakerNotes: false,
      
      // Timer state
      startTime: null,
      elapsedTime: 0,
      isTimerRunning: false,
      
      // Presentation settings
      autoAdvance: false,
      autoAdvanceInterval: 30000, // 30 seconds
      
      // Actions
      setCurrentSlide: (slideIndex) => {
        const { totalSlides } = get()
        const clampedIndex = Math.max(0, Math.min(slideIndex, totalSlides - 1))
        set({ currentSlide: clampedIndex })
      },
      
      nextSlide: () => {
        const { currentSlide, totalSlides } = get()
        if (currentSlide < totalSlides - 1) {
          set({ currentSlide: currentSlide + 1 })
        }
      },
      
      prevSlide: () => {
        const { currentSlide } = get()
        if (currentSlide > 0) {
          set({ currentSlide: currentSlide - 1 })
        }
      },
      
      goToSlide: (slideIndex) => {
        set({ currentSlide: slideIndex, showTOC: false })
      },
      
      setTotalSlides: (total) => set({ totalSlides: total }),
      
      toggleTOC: () => set((state) => ({ showTOC: !state.showTOC })),
      toggleHelp: () => set((state) => ({ showHelp: !state.showHelp })),
      toggleSpeakerNotes: () => set((state) => ({ showSpeakerNotes: !state.showSpeakerNotes })),
      
      startPresentation: () => {
        set({ 
          isPresenting: true, 
          startTime: Date.now(),
          isTimerRunning: true 
        })
      },
      
      stopPresentation: () => {
        set({ 
          isPresenting: false, 
          isTimerRunning: false 
        })
      },
      
      updateElapsedTime: (time) => set({ elapsedTime: time }),
      
      setAutoAdvance: (enabled) => set({ autoAdvance: enabled }),
      
      // Reset presentation to start
      resetPresentation: () => set({ 
        currentSlide: 0, 
        showTOC: false, 
        showHelp: false,
        startTime: null,
        elapsedTime: 0,
        isTimerRunning: false
      }),
      
      // Keyboard shortcuts
      handleKeyPress: (key) => {
        const { 
          nextSlide, 
          prevSlide, 
          toggleTOC, 
          toggleHelp, 
          toggleSpeakerNotes,
          goToSlide 
        } = get()
        
        switch (key) {
          case 'ArrowRight':
          case ' ':
            nextSlide()
            break
          case 'ArrowLeft':
            prevSlide()
            break
          case 'g':
          case 'G':
            toggleTOC()
            break
          case '?':
            toggleHelp()
            break
          case 's':
          case 'S':
            toggleSpeakerNotes()
            break
          case 'Home':
            goToSlide(0)
            break
          case 'End':
            const { totalSlides } = get()
            goToSlide(totalSlides - 1)
            break
          case 'Escape':
            set({ showTOC: false, showHelp: false })
            break
          default:
            // Handle number keys for direct navigation
            const num = parseInt(key)
            if (!isNaN(num) && num >= 0 && num <= 9) {
              const { totalSlides } = get()
              if (num < totalSlides) {
                goToSlide(num)
              }
            }
        }
      },
      
      // Progress calculation
      getProgress: () => {
        const { currentSlide, totalSlides } = get()
        return totalSlides > 0 ? (currentSlide / (totalSlides - 1)) * 100 : 0
      },
      
      // Timer formatting
      getFormattedTime: () => {
        const { elapsedTime } = get()
        const minutes = Math.floor(elapsedTime / 60000)
        const seconds = Math.floor((elapsedTime % 60000) / 1000)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
      }
    }),
    {
      name: 'presentation-store',
      partialize: (state) => ({
        showSpeakerNotes: state.showSpeakerNotes,
        autoAdvance: state.autoAdvance
        // Removed currentSlide to prevent persistence
      })
    }
  )
) 