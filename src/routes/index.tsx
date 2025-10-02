import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat " style={{ backgroundImage: "url('./hero.jpg')" }}>
        {/* Background Image */}
        {/* <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.jpeg')" }}  ></div> */}
        {/* Animated Gradient Overlay */}
        {/* <div class="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-indigo-900/80 animate-gradient"></div> */}
        {/* <div class="absolute inset-0 bg-black/30"></div> */}
        
        {/* Floating particles */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-60"></div>
          <div class="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float opacity-40" style="animation-delay: 2s;"></div>
          <div class="absolute top-1/2 left-3/4 w-1 h-1 bg-indigo-400 rounded-full animate-float opacity-80" style="animation-delay: 4s;"></div>
        </div>

        {/* Hero Content - Side by Side Layout */}
        <div class="relative z-10 max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div class="text-center lg:text-left">
              <div class="animate-fade-in-up">
                <h1 class="flex items-center justify-center lg:justify-start gap-4 text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                  <img src="./logo.svg" alt="Seyfr Logo" class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
                  Seyfr
                </h1>
                <p class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Send Your Files Right
                </p>
                <p class="text-lg sm:text-xl lg:text-2xl mb-6 text-gray-300 font-medium leading-relaxed">
                  Seyfr® is a free, open-source, cross-platform file sharing application that lets users send files securely with military-grade encryption, direct P2P connections, and complete privacy.
                </p>
                <p class="text-base sm:text-lg mb-8 text-gray-400 font-medium">
                  🔐 Zero servers, zero storage, zero compromise
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <button class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-glow">
                    <span class="relative z-10">Download</span>
                    <div class="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  {/* <button class="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <span class="relative z-10 flex items-center gap-2">
                      📥 Download
                    </span>
                    <div class="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button> */}
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div class="flex justify-center lg:justify-end">
              <div class="relative">
                <img 
                  src="./share.png" 
                  alt="Seyfr File Sharing Illustration" 
                  class="max-w-full h-auto w-96 lg:w-[500px] animate-float"
                  style="animation-delay: 0.3s;"
                />
                {/* Optional glow effect behind image */}
                <div class="absolute inset-0  rounded-lg blur-xl -z-10 scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900bg-gradient-to-tr from-purple-950 via-purple-800 to-pink-900bg-gradient-to-b from-black via-slate-900 to-gray-800">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Key Features
          </h2>
          
          <div class="grid md:grid-cols-2 gap-12">
            {/* Core Functionality */}
            <div class="space-y-8">
              <h3 class="text-2xl font-bold text-purple-400 mb-6">Core Functionality</h3>
              
              <div class="flex items-start space-x-4 group">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span class="text-xl">📁</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-2">File Sharing</h4>
                  <p class="text-gray-400">Share any file type with lightning-fast speeds</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 group">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span class="text-xl">🔗</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-2">P2P Direct Transfer</h4>
                  <p class="text-gray-400">Direct peer-to-peer connection, no middleman</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 group">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span class="text-xl">⚡</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-2">Real-time Progress</h4>
                  <p class="text-gray-400">Live transfer status and progress tracking</p>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div class="space-y-8">
              <h3 class="text-2xl font-bold text-blue-400 mb-6">Security Features</h3>
              
              <div class="flex items-start space-x-4 group">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span class="text-xl">🛡️</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-2">Military-Grade Encryption</h4>
                  <p class="text-gray-400">Your files are locked with unbreakable security</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 group">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span class="text-xl">🔑</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-2">Advanced Password Protection</h4>
                  <p class="text-gray-400">Your passwords are strengthened and secured</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 group">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span class="text-xl">🚫</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-2">Direct Connection Only</h4>
                  <p class="text-gray-400">No middleman servers, your data stays private</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-950 via-indigo-800 to-fuchsia-900bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-900bg-gradient-to-tr from-purple-950 via-purple-900 to-fuchsia-900bg-gradient-to-b from-gray-950 via-emerald-950 to-teal-900bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-800bg-gradient-to-b from-black via-slate-950 to-gray-900">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          
          <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center group">
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                👤
              </div>
              <h3 class="text-xl font-semibold mb-3 text-purple-400">Sender</h3>
              <p class="text-gray-400">User selects files to share securely</p>
            </div>

            <div class="text-center group">
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                🔒
              </div>
              <h3 class="text-xl font-semibold mb-3 text-pink-400">Encrypt & Package</h3>
              <p class="text-gray-400">Files are encrypted with AES-256-GCM</p>
            </div>

            <div class="text-center group">
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                🎫
              </div>
              <h3 class="text-xl font-semibold mb-3 text-red-400">Ticket Generation</h3>
              <p class="text-gray-400">Secure sharing ticket is created</p>
            </div>

            <div class="text-center group">
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                📥
              </div>
              <h3 class="text-xl font-semibold mb-3 text-orange-400">Receiver</h3>
              <p class="text-gray-400">Recipient downloads and decrypts files</p>
            </div>
          </div>

          {/* Flow arrows for desktop */}
          <div class="hidden md:flex justify-center items-center mt-8 space-x-8">
            <div class="flex-1 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
            <div class="flex-1 h-0.5 bg-gradient-to-r from-pink-600 to-red-600"></div>
            <div class="flex-1 h-0.5 bg-gradient-to-r from-red-600 to-orange-600"></div>
          </div>
        </div>
      </section>

      {/* Security Model Section */}
      <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
            Security Model
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="group">
              <div class="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div class="text-4xl mb-4">🔐</div>
                <h3 class="text-2xl font-bold mb-4 text-purple-400">End-to-End Encryption</h3>
                <p class="text-gray-300">Your files are encrypted before leaving your device and only decrypted by the intended recipient.</p>
              </div>
            </div>

            <div class="group">
              <div class="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div class="text-4xl mb-4">🌐</div>
                <h3 class="text-2xl font-bold mb-4 text-blue-400">Zero Knowledge</h3>
                <p class="text-gray-300">We never see your files. Everything happens directly between you and your recipient.</p>
              </div>
            </div>

            <div class="group">
              <div class="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-2xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div class="text-4xl mb-4">⚡</div>
                <h3 class="text-2xl font-bold mb-4 text-indigo-400">No Central Servers</h3>
                <p class="text-gray-300">Completely decentralized architecture means no single point of failure or data breach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <footer class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-purple-900 to-black">
        {/* <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Start Sharing Securely
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Join thousands of users who trust Seyfr for secure file sharing
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-glow">
              <span class="relative z-10">Get Started Now</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button class="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              View on GitHub
            </button>
            
            <button class="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span class="relative z-10 flex items-center gap-2">
                💝 Donate
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-700 to-rose-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <div class="flex justify-center space-x-8 text-gray-400">
            <a href="#" class="hover:text-purple-400 transition-colors duration-300">Documentation</a>
            <a href="#" class="hover:text-purple-400 transition-colors duration-300">GitHub</a>
            <a href="#" class="hover:text-purple-400 transition-colors duration-300">Support</a>
          </div>
        </div> */}
      </footer>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Seyfr - Send Your Files Right | Military-Grade P2P File Sharing",
  meta: [
    {
      name: "description",
      content: "Seyfr provides military-grade P2P file sharing with AES-256-GCM encryption, PBKDF2 key derivation, and no central servers. Send your files right, securely and privately.",
    },
    {
      name: "keywords",
      content: "file sharing, P2P, encryption, secure, privacy, AES-256, military-grade, decentralized",
    },
    {
      property: "og:title",
      content: "Seyfr - Military-Grade P2P File Sharing",
    },
    {
      property: "og:description",
      content: "Send your files right with military-grade encryption and complete privacy. No central servers, no data storage, just secure P2P file sharing.",
    },
  ],
};
