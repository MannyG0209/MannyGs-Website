import { useLanguage } from "@/lib/LanguageContext"
import { Link } from "react-router-dom"
import { SparklesCore } from "@/components/ui/sparkles"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { LeadGenerationDemo } from "@/components/ui/lead-generation-demo"
import { LiveChatDemo } from "@/components/ui/live-chat-demo"
import { WebsiteDesignDemo } from "@/components/ui/website-design-demo"
import { Phone, Bot, Zap, Globe } from "lucide-react"

export function Services() {
  const { t } = useLanguage();

  return (
    <>
      <div className="fixed inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>

      <div className="relative">
        <div className="relative z-10">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-kulim">
                  Our Services
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
                  Transform your business with cutting-edge AI automation solutions
                </p>
              </>
            }
          >
            <div className="h-full w-full bg-black rounded-2xl p-4 md:p-8 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                {/* AI Phone Callers Service */}
                <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-red-500/50 transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-2xl">
                      🤖
                    </div>
                    <h3 className="text-xl font-semibold text-white">AI Phone Callers</h3>
                  </div>
                  <p className="text-neutral-300 text-sm mb-4">
                    Engage clients automatically in English or Spanish. Our AI callers handle scheduling, lead qualification, and follow-ups — giving your business a professional voice that never sleeps.
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src="/image copy.png"
                      alt="AI Robot Technology"
                     className="w-full h-full object-contain bg-neutral-800"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="flex-grow"></div>
                  <Link
                    to="/contact"
                    className="w-full mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-center font-medium block"
                  >
                    Contact Sales
                  </Link>
                </div>

                {/* Smart Chatbots Service */}
                <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-red-500/50 transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-2xl">
                      💬
                    </div>
                    <h3 className="text-xl font-semibold text-white">Smart Chatbots</h3>
                  </div>
                  <p className="text-neutral-300 text-sm mb-4">
                    Capture leads, answer questions, and close more sales through instant AI-powered conversations. Available 24/7, your chatbot turns every website visit into an opportunity.
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-neutral-800 p-3 flex flex-col">
                      <div className="flex-1 space-y-2 overflow-y-auto">
                        <div className="flex justify-start">
                          <div className="bg-neutral-700 text-white text-xs px-3 py-2 rounded-lg max-w-[80%]">
                            Hi! How can I help you today?
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-red-600 text-white text-xs px-3 py-2 rounded-lg max-w-[80%]">
                            I'm interested in your services
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-neutral-700 text-white text-xs px-3 py-2 rounded-lg max-w-[80%]">
                            Great! What type of business do you have?
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-red-600 text-white text-xs px-3 py-2 rounded-lg max-w-[80%]">
                            Real estate agency
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-neutral-700 text-white text-xs px-3 py-2 rounded-lg max-w-[80%]">
                            Perfect! Our AI can help qualify leads 24/7. Would you like to schedule a demo?
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-neutral-600">
                        <div className="flex-1 bg-neutral-700 rounded px-2 py-1">
                          <span className="text-neutral-400 text-xs">Type your message...</span>
                        </div>
                        <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow"></div>
                  <Link
                    to="/contact"
                    className="w-full mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-center font-medium block"
                  >
                    Contact Sales
                  </Link>
                </div>

                {/* Web Development Service */}
                <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-red-500/50 transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-2xl">
                      🌐
                    </div>
                    <h3 className="text-xl font-semibold text-white">Web Development</h3>
                  </div>
                  <p className="text-neutral-300 text-sm mb-4">
                    Launch stunning, mobile-ready websites designed to attract, impress, and convert visitors. Optimized for speed, SEO, and seamless integration with your AI systems.
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&auto=format&fit=crop&q=60"
                      alt="Website Design"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="flex-grow"></div>
                  <Link
                    to="/contact"
                    className="w-full mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-center font-medium block"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </ContainerScroll>
        </div>
      </div>
    </>
  );
}