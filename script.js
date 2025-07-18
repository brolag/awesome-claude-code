// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// DOM Elements
const cursor = document.querySelector('.cursor');
const typingText = document.querySelector('.typing');
const sidebar = document.querySelector('.sidebar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const sidebarLinks = document.querySelectorAll('.sidebar a');
const contentSections = document.querySelectorAll('.content-section');

// Initialize GSAP timeline
const tl = gsap.timeline();

// Educational Website State
let currentSection = 'introduction';
let progress = {
    completed: ['intro', 'installation'],
    current: 'first-command',
    total: 16
};

// Navigation Functions
function toggleSidebar() {
    sidebar.classList.toggle('open');
}

function showSection(sectionId) {
    // Hide all sections
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        
        // Update navigation
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
        
        // Animate section entrance
        gsap.fromTo(targetSection, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
    }
}

function updateProgress() {
    const progressBar = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressBar && progressText) {
        const completedCount = progress.completed.length;
        const percentage = Math.round((completedCount / progress.total) * 100);
        
        gsap.to(progressBar, {
            width: `${percentage}%`,
            duration: 0.8,
            ease: "power2.out"
        });
        
        progressText.textContent = `${percentage}% Complete`;
        progressBar.setAttribute('data-progress', percentage);
    }
}

// Event Listeners
if (navToggle) {
    navToggle.addEventListener('click', toggleSidebar);
}

// Navigation link handlers
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        showSection(sectionId);
        
        // Close sidebar on mobile
        if (window.innerWidth <= 1024) {
            sidebar.classList.remove('open');
        }
    });
});

// Sidebar link handlers
sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        if (href.startsWith('#')) {
            const sectionId = href.substring(1);
            showSection(sectionId);
        }
        
        // Close sidebar on mobile
        if (window.innerWidth <= 1024) {
            sidebar.classList.remove('open');
        }
    });
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024 && 
        !sidebar.contains(e.target) && 
        !navToggle.contains(e.target) &&
        sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        gsap.to(navbar, { 
            duration: 0.3, 
            y: -100, 
            ease: "power2.out" 
        });
    } else {
        // Scrolling up
        gsap.to(navbar, { 
            duration: 0.3, 
            y: 0, 
            ease: "power2.out" 
        });
    }
    lastScrollTop = scrollTop;
});

// Simplified terminal animation
function initializeTerminalAnimation() {
    const terminal = document.querySelector('.terminal-window');
    const typingElement = document.querySelector('.typing');
    
    if (terminal) {
        // Simple fade in for terminal
        gsap.fromTo(terminal, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
    }
    
    // Simple typing effect
    if (typingElement) {
        typingElement.textContent = '';
        const text = "let's start learning!";
        let i = 0;
        
        setTimeout(() => {
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    typingElement.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 80);
        }, 1500);
    }
}

// Feature cards animation
gsap.set('.feature-card', { opacity: 0, y: 50 });

ScrollTrigger.create({
    trigger: '.features',
    start: 'top 80%',
    onEnter: () => {
        gsap.to('.feature-card', {
            duration: 0.8,
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: "power2.out"
        });
    }
});

// Feature card hover effects
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.3,
            scale: 1.05,
            ease: "power2.out"
        });
        
        gsap.to(card.querySelector('.icon-glow'), {
            duration: 0.3,
            opacity: 1,
            scale: 1.2,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.3,
            scale: 1,
            ease: "power2.out"
        });
        
        gsap.to(card.querySelector('.icon-glow'), {
            duration: 0.3,
            opacity: 0,
            scale: 1,
            ease: "power2.out"
        });
    });
});

// Educational Interactive Features

// Copy button functionality
function initializeCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = btn.textContent;
                btn.textContent = 'Copied!';
                btn.style.background = 'var(--accent)';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = 'var(--primary)';
                }, 2000);
            });
        });
    });
}

// Quiz functionality
function initializeQuizzes() {
    document.querySelectorAll('.check-answer').forEach(btn => {
        btn.addEventListener('click', () => {
            const correct = btn.getAttribute('data-correct');
            const questionContainer = btn.closest('.quiz-question');
            const selectedOption = questionContainer.querySelector('input[type="radio"]:checked');
            
            if (!selectedOption) {
                btn.textContent = 'Please select an answer';
                btn.style.background = 'var(--warning)';
                setTimeout(() => {
                    btn.textContent = 'Check Answer';
                    btn.style.background = 'var(--primary)';
                }, 2000);
                return;
            }
            
            if (selectedOption.value === correct) {
                btn.textContent = '✓ Correct!';
                btn.style.background = 'var(--accent)';
                questionContainer.style.border = '1px solid var(--accent)';
                
                // Update progress
                progress.completed.push('quiz-' + Date.now());
                updateProgress();
            } else {
                btn.textContent = '✗ Try again';
                btn.style.background = 'var(--error)';
                questionContainer.style.border = '1px solid var(--error)';
                
                setTimeout(() => {
                    btn.textContent = 'Check Answer';
                    btn.style.background = 'var(--primary)';
                    questionContainer.style.border = '1px solid rgba(0, 212, 255, 0.2)';
                }, 3000);
            }
        });
    });
}

// Practice terminal functionality
function initializePracticeTerminals() {
    document.querySelectorAll('.practice-input').forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const expected = input.getAttribute('data-expected');
                const userInput = input.value.trim();
                const feedbackArea = input.closest('.terminal-body').querySelector('.feedback-area');
                
                if (userInput.toLowerCase() === expected.toLowerCase()) {
                    feedbackArea.innerHTML = `
                        <div class="output-line success">✓ Correct! Well done.</div>
                        <div class="output-line">Try the next exercise.</div>
                    `;
                    input.disabled = true;
                    input.style.color = 'var(--accent)';
                } else {
                    feedbackArea.innerHTML = `
                        <div class="output-line error">✗ Not quite right. Expected: ${expected}</div>
                        <div class="output-line">Try again.</div>
                    `;
                }
                
                // Scroll feedback into view
                feedbackArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
}

// Challenge system
const challengeData = {
    1: {
        tasks: [
            { command: 'claude --version', description: 'Check version' },
            { command: 'claude help generate', description: 'Get help' },
            { command: 'claude generate function hello', description: 'Create function' }
        ],
        currentTask: 0
    }
};

function initializeChallenges() {
    document.querySelectorAll('.challenge-input').forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const challengeId = 1; // For this demo
                const challenge = challengeData[challengeId];
                const userInput = input.value.trim();
                const currentTask = challenge.tasks[challenge.currentTask];
                
                if (userInput.toLowerCase() === currentTask.command.toLowerCase()) {
                    // Mark task as completed
                    const taskElement = document.querySelector(`[data-task="${challenge.currentTask + 1}"]`);
                    if (taskElement) {
                        taskElement.classList.add('completed');
                        taskElement.querySelector('.task-icon').textContent = '✓';
                    }
                    
                    // Add to terminal history
                    const terminalBody = input.closest('.terminal-body');
                    const newLine = document.createElement('div');
                    newLine.className = 'terminal-line';
                    newLine.innerHTML = `
                        <span class="prompt">$</span>
                        <span class="command">${userInput}</span>
                    `;
                    
                    const response = document.createElement('div');
                    response.className = 'terminal-output';
                    response.innerHTML = `<span class="success">✓ Task completed!</span>`;
                    
                    terminalBody.insertBefore(newLine, input.closest('.terminal-line'));
                    terminalBody.insertBefore(response, input.closest('.terminal-line'));
                    
                    // Move to next task
                    challenge.currentTask++;
                    input.value = '';
                    
                    if (challenge.currentTask >= challenge.tasks.length) {
                        input.placeholder = 'Challenge completed! 🎉';
                        input.disabled = true;
                        
                        // Update progress
                        progress.completed.push('challenge-1');
                        updateProgress();
                    } else {
                        input.placeholder = `Task ${challenge.currentTask + 1}: ${challenge.tasks[challenge.currentTask].description}`;
                    }
                } else {
                    // Show error
                    const terminalBody = input.closest('.terminal-body');
                    const errorLine = document.createElement('div');
                    errorLine.className = 'terminal-output';
                    errorLine.innerHTML = `<span class="error">Command not recognized. Try: ${currentTask.command}</span>`;
                    
                    terminalBody.insertBefore(errorLine, input.closest('.terminal-line'));
                    input.value = '';
                }
                
                // Scroll to bottom
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
        });
    });
}

// Tutorial system
function initializeTutorials() {
    document.querySelectorAll('.start-tutorial').forEach(btn => {
        btn.addEventListener('click', () => {
            const tutorialId = btn.getAttribute('data-tutorial');
            
            // Simulate tutorial start
            btn.textContent = 'Starting...';
            btn.disabled = true;
            
            setTimeout(() => {
                alert(`Tutorial "${tutorialId}" would start here!\nThis would guide you through step-by-step instructions.`);
                btn.textContent = 'Continue Tutorial';
                btn.disabled = false;
            }, 1500);
        });
    });
}

// Demo terminal functionality  
const demoCommands = {
    'help': `<div class="help-output">
        <div class="help-line"><span class="command-name">claude</span> - AI-powered development assistant</div>
        <div class="help-section">
            <div class="help-title">COMMANDS:</div>
            <div class="help-command">  generate    Generate code components</div>
            <div class="help-command">  debug       Find and fix issues</div>
            <div class="help-command">  deploy      Deploy to platforms</div>
            <div class="help-command">  test        Run intelligent tests</div>
        </div>
    </div>`,
    
    'claude --version': `<div class="terminal-output">
        <span class="info">Claude Code v2.1.0</span>
    </div>`,
    
    'claude hello': `<div class="terminal-output">
        <span class="success">✓ Hello! Claude Code is ready to help.</span>
        <div style="color: #9CA3AF; margin-top: 4px;">Type 'claude help' to see available commands.</div>
    </div>`,
    
    'generate button': `<div class="terminal-output">
        <span class="success">✓ Generated React Button component</span>
        <div style="margin-top: 8px; color: #9CA3AF;">
            Created: components/Button.tsx<br>
            Added: Button.stories.tsx<br>
            Updated: index.ts
        </div>
    </div>`,
    
    'debug': `<div class="terminal-output">
        <span class="success">✓ Found 3 issues in your code</span>
        <div style="margin-top: 8px; color: #F59E0B;">
            Warning: Unused import in Header.tsx:5<br>
            Error: Missing key prop in UserList.tsx:23<br>
            Info: Consider memoizing expensive calculation
        </div>
    </div>`,
    
    'deploy': `<div class="terminal-output">
        <span class="success">✓ Deploying to Vercel...</span>
        <div style="margin-top: 8px; color: #9CA3AF;">
            Building project...<br>
            Optimizing bundle...<br>
            Deploying to production...<br>
            <span style="color: #10B981;">🚀 Deployed to: https://your-app.vercel.app</span>
        </div>
    </div>`,
    
    'test': `<div class="terminal-output">
        <span class="success">✓ Running intelligent tests...</span>
        <div style="margin-top: 8px; color: #9CA3AF;">
            Found 12 test files<br>
            Running unit tests...<br>
            Running integration tests...<br>
            <span style="color: #10B981;">✓ All tests passed (24/24)</span>
        </div>
    </div>`
};

if (demoInput) {
    demoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = demoInput.value.toLowerCase().trim();
            
            // Create new terminal line
            const newLine = document.createElement('div');
            newLine.className = 'terminal-line';
            newLine.innerHTML = `
                <span class="prompt">$</span>
                <span class="command">${demoInput.value}</span>
            `;
            
            // Insert before the active line
            const activeLine = document.querySelector('.terminal-line.active');
            activeLine.parentNode.insertBefore(newLine, activeLine);
            
            // Add response
            if (demoCommands[command]) {
                const responseDiv = document.createElement('div');
                responseDiv.innerHTML = demoCommands[command];
                activeLine.parentNode.insertBefore(responseDiv, activeLine);
            } else if (command) {
                const responseDiv = document.createElement('div');
                responseDiv.className = 'terminal-output';
                responseDiv.innerHTML = `<span style="color: #EF4444;">Command not found: ${command}</span>`;
                activeLine.parentNode.insertBefore(responseDiv, activeLine);
            }
            
            // Clear input
            demoInput.value = '';
            
            // Scroll to bottom
            demoTerminal.scrollTop = demoTerminal.scrollHeight;
        }
    });
}

// Playground section animation
gsap.set('.demo-terminal', { opacity: 0, y: 30 });

ScrollTrigger.create({
    trigger: '.playground',
    start: 'top 70%',
    onEnter: () => {
        gsap.to('.demo-terminal', {
            duration: 0.8,
            opacity: 1,
            y: 0,
            ease: "power2.out"
        });
    }
});

// Documentation cards animation
gsap.set('.doc-card', { opacity: 0, x: -30 });

ScrollTrigger.create({
    trigger: '.documentation',
    start: 'top 80%',
    onEnter: () => {
        gsap.to('.doc-card', {
            duration: 0.6,
            opacity: 1,
            x: 0,
            stagger: 0.1,
            ease: "power2.out"
        });
    }
});

// Button hover effects
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            duration: 0.3,
            scale: 1.05,
            boxShadow: "0 0 30px rgba(0, 212, 255, 0.5), 0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            ease: "power2.out"
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            duration: 0.3,
            scale: 1,
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            ease: "power2.out"
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: "power2.inOut"
            });
        }
    });
});

// Parallax effect for hero background
gsap.to('.hero', {
    backgroundPosition: '50% 100%',
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Cursor follow effect (optional enhancement)
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Custom cursor animation
const customCursor = document.createElement('div');
customCursor.className = 'custom-cursor';
customCursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.6) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease;
`;
document.body.appendChild(customCursor);

gsap.to(customCursor, {
    duration: 0.1,
    repeat: -1,
    onRepeat: () => {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        gsap.set(customCursor, {
            x: cursorX - 10,
            y: cursorY - 10
        });
    }
});

// Show cursor on interactive elements
document.querySelectorAll('button, a, .feature-card, .doc-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(customCursor, { opacity: 1, scale: 1.5, duration: 0.3 });
    });
    
    el.addEventListener('mouseleave', () => {
        gsap.to(customCursor, { opacity: 0, scale: 1, duration: 0.3 });
    });
});

// Performance optimization: Reduce animations on low-end devices
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable complex animations for users who prefer reduced motion
    gsap.set('*', { clearProps: 'all' });
    ScrollTrigger.killAll();
}

// Initialize educational features
function initializeEducationalFeatures() {
    initializeCopyButtons();
    initializeQuizzes();
    initializePracticeTerminals();
    initializeChallenges();
    initializeTutorials();
    updateProgress();
}

// Loading animation and initialization
window.addEventListener('load', () => {
    // Initialize educational features
    initializeEducationalFeatures();
    
    // Initialize terminal animation
    initializeTerminalAnimation();
    
    // Loading animation
    gsap.to('.loading-overlay', {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
            const overlay = document.querySelector('.loading-overlay');
            if (overlay) overlay.remove();
        }
    });
    
    // Initialize progress bar animation
    setTimeout(() => {
        updateProgress();
    }, 1000);
});

// Intersection Observer for fade-in animations (fallback)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in effect
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Window resize handler for responsive behavior
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        sidebar.classList.remove('open');
    }
});

// Keyboard shortcuts for navigation
document.addEventListener('keydown', (e) => {
    // ESC to close sidebar
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
    
    // Arrow keys for section navigation
    if (e.altKey) {
        const sections = ['introduction', 'fundamentals', 'tutorials', 'practice'];
        const currentIndex = sections.indexOf(currentSection);
        
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            showSection(sections[currentIndex - 1]);
        } else if (e.key === 'ArrowRight' && currentIndex < sections.length - 1) {
            showSection(sections[currentIndex + 1]);
        }
    }
});

console.log('🎓 Claude Code Learning Hub loaded successfully!');
console.log('📚 Interactive tutorials and challenges ready');
console.log('⚡ GSAP animations initialized');
console.log('🎨 Educational design system active');
console.log('💡 Try the interactive terminals and challenges!');