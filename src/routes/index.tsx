import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen bg-black text-white overflow-hidden relative" itemScope itemType="https://schema.org/WebPage">
      {/* Animated background grid */}
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 50px 50px;"></div>
      </div>
      
      {/* Navigation */}
      <nav class="relative z-50 flex items-center justify-between p-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div class="flex items-center gap-3">
          <img src="./logo.svg" alt="Seyfr - Secure P2P File Sharing Logo" class="w-8 h-8" />
          <span class="text-xl font-bold" itemProp="name">Seyfr</span>
        </div>
        <div class="hidden md:flex items-center gap-8 text-sm font-medium">
          <button class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300" aria-label="Download Seyfr application">
            Download
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
      <section class="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 -mt-20" itemScope itemType="https://schema.org/SoftwareApplication" role="banner">
        {/* Dynamic background */}
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-black to-cyan-900/10"></div>
          <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
        </div>

        {/* Hero Content */}
        <div class="relative z-10 max-w-7xl mx-auto w-full">
          <div class="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Side - Content */}
            <div class="lg:col-span-7 text-center lg:text-left">
              <div class="space-y-8">
                {/* Badge */}
                <div class="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-gray-300 tracking-wide font-medium antialiased">Built with Rust • Powered by Iroh • Military-Grade Security</span>
                </div>
                
                {/* Main headline with perfect typography */}
                <div class="space-y-8">
                  <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-[-0.025em] antialiased" itemProp="name">
                    <span class="block text-white mb-3 drop-shadow-sm">Send</span>
                    <span class="block bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3 animate-gradient bg-300% bg-pos-0 hover:bg-pos-100 transition-all duration-1000 drop-shadow-sm">Your Files</span>
                    <span class="block text-white drop-shadow-sm">Right</span>
                  </h1>
                  
                  {/* Subtitle with perfect hierarchy */}
                  <div class="space-y-6 mt-8">
                    <p class="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-light leading-[1.35] max-w-2xl tracking-[-0.015em] antialiased" itemProp="description">
                      Share massive files without limits or surveillance.
                    </p>
                    <p class="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-[1.5] max-w-2xl font-normal antialiased">
                      Direct P2P transfers with AES-256-GCM encryption. No servers, no size limits, no monthly quotas. Your files, your control.
                    </p>
                  </div>
                </div>
                
                {/* Enhanced feature pills */}
                <div class="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                  <div class="flex items-center gap-3 px-5 py-3 bg-violet-500/10 border border-violet-500/20 rounded-full text-sm font-semibold">
                    <div class="w-2 h-2 bg-violet-400 rounded-full"></div>
                    <span class="text-violet-300 tracking-wide font-semibold antialiased">No Size Limits</span>
                  </div>
                  <div class="flex items-center gap-3 px-5 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-semibold">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span class="text-cyan-300 tracking-wide font-semibold antialiased">Zero Servers</span>
                  </div>
                  <div class="flex items-center gap-3 px-5 py-3 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-semibold">
                    <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span class="text-green-300 tracking-wide font-semibold antialiased">Always Free</span>
                  </div>
                </div>
                
                {/* Premium CTA buttons */}
                <div class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-10">
                  <button class="group relative px-10 py-5 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25">
                    <div class="absolute inset-0 bg-gradient-to-r from-violet-700 via-purple-700 to-cyan-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <span class="relative flex items-center gap-3 tracking-wide">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                      Download Free
                      <div class="w-1 h-1 bg-white rounded-full animate-ping"></div>
                    </span>
                  </button>
                  
                  <button class="group px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-3">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span class="tracking-wide">View Source</span>
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Send & Receive Interface Showcase */}
            <div class="lg:col-span-5 flex justify-center lg:justify-end">
              <div class="relative w-full max-w-lg">
                {/* Send Interface (Main) */}
                <div class="relative z-20">
                  <div class="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 shadow-2xl">
                    {/* Window controls */}
                    <div class="flex items-center gap-2 mb-6">
                      <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div class="flex-1"></div>
                      <div class="flex items-center gap-2 text-xs text-gray-400">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Seyfr</span>
                      </div>
                    </div>
                    
                    {/* Seyfr branding */}
                    <div class="text-center mb-6">
                      <h2 class="text-xl font-black mb-1">
                        <span class="text-red-400">S</span>
                        <span class="text-cyan-400">E</span>
                        <span class="text-yellow-400">Y</span>
                        <span class="text-green-400">F</span>
                        <span class="text-orange-400">R</span>
                      </h2>
                      <p class="text-xs text-gray-400 font-mono">Send Your Files Right</p>
                    </div>
                    
                    {/* Send/Receive buttons */}
                    <div class="flex gap-3 mb-6">
                      <button class="flex-1 flex items-center gap-2 px-3 py-2 bg-blue-600 rounded-xl font-medium text-xs">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Send Files
                      </button>
                      <button class="flex-1 flex items-center gap-2 px-3 py-2 bg-gray-700 border border-gray-600 rounded-xl font-medium text-xs">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Receive Files
                      </button>
                    </div>
                    
                    {/* File selection area */}
                    <div class="border-2 border-dashed border-gray-600 rounded-2xl p-6 text-center bg-gray-800/30">
                      <div class="w-8 h-8 mx-auto mb-3 text-gray-500">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        </svg>
                      </div>
                      <p class="text-gray-300 font-medium text-sm mb-1">Select files and folders to send</p>
                      <p class="text-gray-500 text-xs mb-3">Send files and folders securely</p>
                      
                      <div class="flex gap-2 justify-center">
                        <button class="flex items-center gap-1 px-3 py-1.5 bg-violet-600 rounded-lg text-xs font-medium">
                          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Choose Files
                        </button>
                        <button class="flex items-center gap-1 px-3 py-1.5 bg-green-600 rounded-lg text-xs font-medium">
                          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                          </svg>
                          Choose Folder
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Receive Interface (Floating) */}
                <div class="absolute -bottom-8 -right-8 z-10 transform rotate-3">
                  <div class="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 shadow-2xl w-72">
                    {/* Mini window controls */}
                    <div class="flex items-center gap-1.5 mb-4">
                      <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div class="flex-1"></div>
                      <span class="text-xs text-gray-400">Seyfr</span>
                    </div>
                    
                    {/* Receive interface */}
                    <div class="space-y-3">
                      <div class="flex items-center gap-2 text-yellow-400 text-sm font-medium">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                        Enter Ticket Code
                      </div>
                      
                      {/* Ticket input */}
                      <div class="bg-gray-800/50 rounded-lg p-2 border border-gray-600">
                        <div class="text-xs text-gray-400 font-mono truncate">
                          BlobJhifjk589054u800054rghfiier7789iweyuuiujdsbnsduiud
                        </div>
                      </div>
                      
                      {/* Password input */}
                      <div class="bg-gray-800/50 rounded-lg p-2 border border-blue-500/50">
                        <div class="text-xs text-gray-500">
                          Enter password (Leave empty if not encrypted)
                        </div>
                      </div>
                      
                      {/* Destination */}
                      <div class="flex items-center gap-2 text-xs">
                        <svg class="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        </svg>
                        <span class="text-gray-400 truncate">/Users/samsonssali/Downloads/seyfr-downloads</span>
                        <button class="text-blue-400 text-xs">Change</button>
                      </div>
                      
                      {/* Receive button */}
                      <button class="w-full py-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                        Receive Files
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Floating security badge */}
                <div class="absolute -top-4 -right-4 z-30 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-3 shadow-lg animate-bounce" style="animation-delay: 3s;">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                {/* Floating connection indicator */}
                <div class="absolute -bottom-4 -left-4 z-30 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-3 shadow-lg">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <span class="text-xs font-medium text-white">P2P</span>
                  </div>
                </div>
                
                {/* Background glow */}
                <div class="absolute -inset-12 bg-gradient-to-r from-violet-600/10 to-cyan-600/10 rounded-3xl blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Features Section - Revolutionary Design */}
      <section id="features" class="relative py-40 px-4 sm:px-6 lg:px-8 overflow-hidden" itemScope itemType="https://schema.org/ItemList" aria-labelledby="features-heading">
        {/* Animated background */}
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
          <div class="absolute inset-0 opacity-30">
            <div class="absolute top-20 left-10 w-2 h-2 bg-violet-400 rounded-full animate-particle-float"></div>
            <div class="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-particle-float" style="animation-delay: 1s;"></div>
            <div class="absolute bottom-32 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-particle-float" style="animation-delay: 2s;"></div>
            <div class="absolute top-60 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-particle-float" style="animation-delay: 3s;"></div>
          </div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-violet-500/5 via-cyan-500/5 to-violet-500/5 rounded-full blur-3xl animate-morphing"></div>
        </div>
        
        <div class="relative max-w-7xl mx-auto">
          {/* Revolutionary section header */}
          <div class="text-center mb-24">
            <div class="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-8">
              <div class="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span class="text-sm font-medium text-gray-300">Problems Everyone Faces</span>
            </div>
            <h2 class="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span class="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-shimmer">Break Free</span>
              <span class="block bg-gradient-to-r from-violet-400 via-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient neon-text">From Limits</span>
            </h2>
            <p class="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Tired of "file too large", "link expired", and "monthly limit reached"? Seyfr solves the problems that plague traditional file sharing.
            </p>
          </div>
          
          {/* Interactive features grid */}
          <div class="grid lg:grid-cols-12 gap-8">
            {/* Main feature - Spans 8 columns */}
            <div class="lg:col-span-8 group magnetic">
              <div class="relative h-full glass-strong rounded-3xl p-8 lg:p-12 overflow-hidden hover:bg-white/15 transition-all duration-700 border-2 border-transparent hover:border-violet-500/30">
                {/* Animated background elements */}
                <div class="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
                
                <div class="relative z-10">
                  {/* Icon with advanced styling */}
                  <div class="w-20 h-20 bg-gradient-to-br from-violet-500 via-purple-600 to-cyan-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  
                  <h3 class="text-3xl lg:text-4xl font-black text-white mb-6 group-hover:text-violet-300 transition-colors duration-300" id="features-heading">
                    "Your File is Too Large"
                  </h3>
                  
                  <p class="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                    <span class="text-red-400 font-semibold">Traditional services:</span> 2-10GB limits, then expensive monthly plans.<br/>
                    <span class="text-green-400 font-semibold">Seyfr:</span> Share massive files, entire project folders, 4K video libraries without artificial restrictions.
                  </p>
                  
                  {/* Problem/Solution badges */}
                  <div class="flex flex-wrap gap-3 mb-8">
                    <div class="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-sm font-medium text-red-300">
                      ❌ 2-10GB Limits
                    </div>
                    <div class="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-sm font-medium text-green-300">
                      ✅ Unlimited Size
                    </div>
                    <div class="px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-sm font-medium text-violet-300">
                      🚀 P2P Direct
                    </div>
                  </div>
                  
                  <button class="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl font-semibold text-white hover:from-violet-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25">
                    <span>Learn Security Details</span>
                    <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Side features - 4 columns */}
            <div class="lg:col-span-4 space-y-8">
              {/* P2P Feature */}
              <div class="group magnetic">
                <div class="relative glass rounded-3xl p-6 overflow-hidden hover:bg-white/10 transition-all duration-500 border border-transparent hover:border-cyan-500/30">
                  <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div class="relative">
                    <div class="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">"Your Link Has Expired"</h3>
                    <p class="text-gray-400 leading-relaxed text-sm">
                      <span class="text-red-400">Most services:</span> Files vanish after 2-7 days.<br/>
                      <span class="text-cyan-400">Seyfr:</span> Available as long as you keep sharing.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Speed Feature */}
              <div class="group magnetic">
                <div class="relative glass rounded-3xl p-6 overflow-hidden hover:bg-white/10 transition-all duration-500 border border-transparent hover:border-green-500/30">
                  <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div class="relative">
                    <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">"Monthly Limit Reached"</h3>
                    <p class="text-gray-400 leading-relaxed text-sm">
                      <span class="text-red-400">Many services:</span> 10-20 transfers/month for free.<br/>
                      <span class="text-green-400">Seyfr:</span> No quotas, no artificial restrictions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom spanning feature */}
            <div class="lg:col-span-12 group magnetic mt-8">
              <div class="relative glass-strong rounded-3xl p-8 lg:p-12 overflow-hidden hover:bg-white/15 transition-all duration-700 border-2 border-transparent hover:border-orange-500/30">
                <div class="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                <div class="absolute -bottom-5 -left-5 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-1000"></div>
                
                <div class="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div class="w-20 h-20 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-2xl">
                      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 class="text-3xl lg:text-4xl font-black text-white mb-6 group-hover:text-orange-300 transition-colors duration-300">
                      "Pay to Remove Ads"
                    </h3>
                    <p class="text-xl text-gray-300 leading-relaxed mb-8">
                      <span class="text-red-400 font-semibold">Most services:</span> Ads everywhere or $10-15/month subscriptions.<br/>
                      <span class="text-orange-400 font-semibold">Seyfr:</span> Clean interface, no ads, always free. Community-funded to stay independent from corporate surveillance.
                    </p>
                    <button class="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl font-semibold text-white hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Support Development</span>
                      <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Stats */}
                  <div class="grid grid-cols-2 gap-8">
                    <div class="text-center">
                      <div class="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">🦀</div>
                      <div class="text-gray-400 font-medium">Built with Rust</div>
                    </div>
                    <div class="text-center">
                      <div class="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">FREE</div>
                      <div class="text-gray-400 font-medium">Core Features</div>
                    </div>
                    <div class="text-center">
                      <div class="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">💝</div>
                      <div class="text-gray-400 font-medium">Community Funded</div>
                    </div>
                    <div class="text-center">
                      <div class="text-4xl font-black bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2">24/7</div>
                      <div class="text-gray-400 font-medium">Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section class="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" itemScope itemType="https://schema.org/HowTo" aria-labelledby="howto-heading">
        {/* Background */}
        <div class="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center mb-24">
            <div class="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-8">
              <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span class="text-sm font-medium text-gray-300">How Seyfr Works</span>
            </div>
            <h2 class="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight" itemProp="name" id="howto-heading">
              <span class="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Simple.</span>
              <span class="block bg-gradient-to-r from-violet-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient">Secure. Fast.</span>
            </h2>
            <p class="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Share files in seconds with enterprise-grade security
            </p>
          </div>
          
          {/* Modern step cards */}
          <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Step 1 & 2 */}
            <div class="space-y-8">
              {/* Step 1 */}
              <div class="group relative">
                <div class="glass-strong rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 border border-transparent hover:border-violet-500/30">
                  <div class="flex items-start gap-6">
                    <div class="relative flex-shrink-0">
                      <div class="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl font-black text-white">01</span>
                      </div>
                      <div class="absolute -inset-2 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300" itemProp="name">Choose Files or Folders</h3>
                      <p class="text-gray-400 leading-relaxed text-lg">
                        Select the file(s) or folder(s) you want to share. Any file type, any size.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div class="group relative">
                <div class="glass-strong rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 border border-transparent hover:border-cyan-500/30">
                  <div class="flex items-start gap-6">
                    <div class="relative flex-shrink-0">
                      <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl font-black text-white">02</span>
                      </div>
                      <div class="absolute -inset-2 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300" itemProp="name">Add Password (Optional)</h3>
                      <p class="text-gray-400 leading-relaxed text-lg">
                        Optionally add a password to encrypt your transfer. Only people with the password can receive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 & 4 */}
            <div class="space-y-8">
              {/* Step 3 */}
              <div class="group relative">
                <div class="glass-strong rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 border border-transparent hover:border-green-500/30">
                  <div class="flex items-start gap-6">
                    <div class="relative flex-shrink-0">
                      <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl font-black text-white">03</span>
                      </div>
                      <div class="absolute -inset-2 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300" itemProp="name">Share Token</h3>
                      <p class="text-gray-400 leading-relaxed text-lg">
                        Get a unique token code to share with your recipient for secure P2P transfer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div class="group relative">
                <div class="glass-strong rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 border border-transparent hover:border-orange-500/30">
                  <div class="flex items-start gap-6">
                    <div class="relative flex-shrink-0">
                      <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl font-black text-white">04</span>
                      </div>
                      <div class="absolute -inset-2 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300" itemProp="name">Receive Files</h3>
                      <p class="text-gray-400 leading-relaxed text-lg">
                        Enter token and password, choose destination directory, and click receive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Receive Interface Showcase */}
          <div class="mt-24 mb-16">
            <div class="max-w-6xl mx-auto">
              <div class="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left side - Description */}
                <div class="space-y-6">
                  <div class="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
                    <div class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span class="text-sm font-medium text-gray-300">Receiving Files</span>
                  </div>
                  
                  <h3 class="text-3xl lg:text-4xl font-black text-white leading-tight">
                    <span class="block">Simple Token-Based</span>
                    <span class="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">File Receiving</span>
                  </h3>
                  
                  <p class="text-lg text-gray-300 leading-relaxed">
                    Recipients just need to enter the token code, optional password, choose their destination folder, and click receive. 
                    The P2P connection handles the rest automatically.
                  </p>
                  
                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <div class="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-300">Paste token from sender</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-300">Enter password if encrypted</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-300">Choose destination folder</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-300">Direct P2P download begins</span>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Receive Interface */}
                <div class="flex justify-center">
                  <div class="w-full max-w-sm">
                    {/* Receive Interface */}
                    <div class="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 shadow-2xl">
                      {/* Window controls */}
                      <div class="flex items-center gap-2 mb-6">
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div class="flex-1"></div>
                        <div class="flex items-center gap-2 text-xs text-gray-400">
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd" />
                          </svg>
                          <span>Seyfr</span>
                        </div>
                      </div>
                      
                      {/* Seyfr branding */}
                      <div class="text-center mb-6">
                        <h2 class="text-2xl font-black mb-2">
                          <span class="text-red-400">S</span>
                          <span class="text-cyan-400">E</span>
                          <span class="text-yellow-400">Y</span>
                          <span class="text-green-400">F</span>
                          <span class="text-orange-400">R</span>
                        </h2>
                        <p class="text-sm text-gray-400 font-mono">Send Your Files Right</p>
                      </div>
                      
                      {/* Send/Receive buttons */}
                      <div class="flex gap-3 mb-6">
                        <button class="flex-1 flex items-center gap-2 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl font-medium text-sm">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                          </svg>
                          Send Files
                        </button>
                        <button class="flex-1 flex items-center gap-2 px-4 py-3 bg-blue-600 rounded-xl font-medium text-sm">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                          </svg>
                          Receive Files
                        </button>
                      </div>
                      
                      {/* Receive interface */}
                      <div class="space-y-4">
                        <div class="flex items-center gap-2 text-yellow-400 text-sm font-medium">
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                          </svg>
                          Enter Ticket Code
                        </div>
                        
                        {/* Ticket input */}
                        <div class="bg-gray-800/50 rounded-lg p-3 border border-gray-600">
                          <div class="text-sm text-gray-400 font-mono break-all">
                            BlobJhifjk589054u800054rghfiier7789iweyuuiujdsbnsduiud
                          </div>
                        </div>
                        
                        {/* Password input */}
                        <div class="bg-gray-800/50 rounded-lg p-3 border border-blue-500/50">
                          <div class="text-sm text-gray-500">
                            Enter password (Leave empty if not encrypted)
                          </div>
                          <div class="text-xs text-blue-400 mt-1 flex items-center gap-1">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                            </svg>
                            Only enter a password if the files are encrypted
                          </div>
                        </div>
                        
                        {/* Destination */}
                        <div class="flex items-center gap-2 text-sm bg-gray-800/30 rounded-lg p-3">
                          <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                          </svg>
                          <span class="text-gray-400 flex-1 truncate">/Users/samsonssali/Downloads/seyfr-downloads</span>
                          <button class="text-blue-400 text-sm font-medium flex-shrink-0">Change</button>
                        </div>
                        
                        {/* Receive button */}
                        <button class="w-full py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                          </svg>
                          Receive Files
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section class="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" role="contentinfo">
        {/* Background */}
        <div class="absolute inset-0 bg-gradient-to-t from-black via-gray-950 to-black"></div>
        <div class="absolute inset-0">
          <div class="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-2xl animate-pulse" style="animation-delay: 4s;"></div>
        </div>
        
        <div class="relative max-w-4xl mx-auto text-center">
          <div class="mb-12">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-8">
              <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to</span>
              <br />
              <span class="bg-gradient-to-r from-violet-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">Share Securely?</span>
            </h2>
            <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Join the privacy revolution. Take back control of your file sharing.
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button class="group relative px-10 py-5 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-r from-violet-700 to-cyan-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span class="relative flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                Download Free
              </span>
            </button>
            
            <button class="px-10 py-5 border-2 border-gray-700 rounded-2xl font-bold text-xl hover:border-gray-600 hover:bg-gray-900/50 transition-all duration-300 flex items-center gap-3">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source
            </button>
          </div>

          {/* Stats */}
          <div class="grid grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto">
            <div class="text-center">
              <div class="text-3xl font-black text-white mb-2">100%</div>
              <div class="text-gray-400">Open Source</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-black text-white mb-2">0</div>
              <div class="text-gray-400">Servers</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-black text-white mb-2">∞</div>
              <div class="text-gray-400">Privacy</div>
            </div>
          </div>

          {/* Links */}
          <div class="flex justify-center space-x-8 text-gray-500">
            <a href="#" class="hover:text-white transition-colors duration-200 font-medium">Documentation</a>
            <a href="#" class="hover:text-white transition-colors duration-200 font-medium">GitHub</a>
            <a href="#" class="hover:text-white transition-colors duration-200 font-medium">Support</a>
            <a href="#" class="hover:text-white transition-colors duration-200 font-medium">Community</a>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Seyfr - Send Your Files Right | Secure P2P File Sharing Without Limits",
  meta: [
    {
      name: "description",
      content: "Share massive files without limits using Seyfr's secure P2P file sharing. No servers, no size limits, no monthly quotas. Built with Rust, powered by Iroh, with AES-256-GCM encryption.",
    },
    {
      name: "keywords",
      content: "file sharing, P2P, peer-to-peer, large files, no limits, secure, privacy, encryption, AES-256, rust, iroh, decentralized, token-based, password protection",
    },
    {
      name: "author",
      content: "Seyfr Team",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "theme-color",
      content: "#8b5cf6",
    },
    // Open Graph
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: "Seyfr - Secure P2P File Sharing Without Limits",
    },
    {
      property: "og:description",
      content: "Break free from file size limits and surveillance. Share massive files directly with P2P technology. No servers, no quotas, always free.",
    },
    {
      property: "og:url",
      content: "https://seyfr.com",
    },
    {
      property: "og:site_name",
      content: "Seyfr",
    },
    {
      property: "og:image",
      content: "https://seyfr.com/og-image.png",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:image:alt",
      content: "Seyfr - Secure P2P File Sharing",
    },
    // Twitter Card
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Seyfr - Send Your Files Right",
    },
    {
      name: "twitter:description",
      content: "Share massive files without limits or surveillance. Secure P2P file sharing built with Rust.",
    },
    {
      name: "twitter:image",
      content: "https://seyfr.com/twitter-card.png",
    },
    {
      name: "twitter:image:alt",
      content: "Seyfr P2P File Sharing Interface",
    },
    // Additional SEO
    {
      name: "application-name",
      content: "Seyfr",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "Seyfr",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    {
      name: "msapplication-TileColor",
      content: "#8b5cf6",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://seyfr.com",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
};
