"use client"

import {useState , useEffect }from 'react'
import { Twitter, Send } from "lucide-react";
import Image from 'next/image';
import { FaLeaf, FaBolt, FaGlobe, FaHandsHelping } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });
  const [activeSection, setActiveSection] = useState('faq');

  const contentData = {
    faq: [
      {
        question: "Is $THUMB really environmentally friendly?",
        answer: "Yes! Built on Solana Network, $THUMB uses 99.9% less power than Bitcoin. We're committed to showing that crypto can be green!"
      },
      {
        question: "How does the donation system work?",
        answer: "For every $100k over $100k MarketCap, we donate $1000 to the IQ Air Foundation to support clean air initiatives."
      },
      {
        question: "Is the contract safe?",
        answer: "Yes! The contract is renounced with no owner, meaning it can never be changed. Your coins are completely safe."
      },
      {
        question: "What is the total supply?",
        answer: "4.58B THUMB tokens - this is a fixed supply that will never increase. 1.75B tokens are in the liquidity pool."
      },
      {
        question: "What happens to the dev tokens?",
        answer: "~15% of supply is held by new community devs, used for marketing and donations once value increases."
      }
    ],
    resources: [
      {
        title: "Contract Address",
        content: "3XvyoNUkwJtwKTAyGEsCG3cUwTfhLzbHW7sSyy2RA8ba"
      },
      {
        title: "Chart Links",
        content: "DexScreener and SolScan available for price tracking and contract verification"
      },
      {
        title: "Community",
        content: "Join our active Telegram and Twitter communities to stay updated"
      }
    ],
    howto: [
      {
        title: "How to Buy $THUMB",
        content: "1. Set up a Solana wallet\n2. Fund your wallet with SOL\n3. Visit our approved DEX\n4. Swap SOL for $THUMB"
      },
      {
        title: "How to Track Progress",
        content: "Follow our donation milestones and MarketCap growth on social media"
      },
      {
        title: "How to Participate",
        content: "Join our community efforts to promote green crypto initiatives"
      }
    ],
    documentation: [
      {
        title: "Tokenomics",
        content: "Total Supply: 4.58B THUMB\nPooled Tokens: 1.75B THUMB\nInitial MCap: $12K\nLiquidity: $9.4k at launch"
      },
      {
        title: "Security",
        content: "Contract Renounced\nLiquidity Burned\nNo Owner Control"
      }
    ]
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-green-700 min-h-screen p-4 relative overflow-hidden">
      {/* Floating leaves effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-green-200 rotate-45 pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4
            }}
          />
        ))}
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white cursor-pointer rounded-full p-3 mb-8 flex items-center justify-between">
        <div className=" font-bungeeflex items-center gap-8">
          <span className="font-bold text-green-800 text-xl ml-0 md:ml-20 ">$THUMB</span>
          {/* <div className="hidden md:flex gap-6">
            <button className=" cursor-pointer text-green-800 hover:text-green-700">ABOUT US</button>
            <button className="text-green-800 hover:text-green-700">HOW TO BUY</button>
            <button className="text-green-800 hover:text-green-700">TOKENOMICS</button>
            <button className="text-green-800 hover:text-green-700">ROADMAP</button>
          </div> */}
        </div>
        <div className="flex gap-4 mr-0 md:mr-20 ">
        <button className="p-2 pointer-events-auto bg-green-100 rounded-full">
    <Send className="w-6 h-6 text-green-800" /> {/* Telegram Icon */}
  </button>
  <button className="p-2 pointer-events-auto bg-green-100 rounded-full">
    <Twitter className="w-6 h-6 text-green-800" /> {/* Twitter Icon */}
  </button>
          <button className="bg-green-700 text-white px-6 py-2 rounded-full font-bold">
            BUY NOW
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex mt-40 flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
        {/* Left Side */}
        <div className="flex-1 md:pr-40 pr-0 ">
          <h1 className="text-6xl font-bold text-white mb-8 [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
            GretaTHUMBerg<br />👍
          </h1>
          <div className="text-white text-lg mb-2">
            <p>Crypto can have a green thumb too! Built on Solana, using 99.9% less power than Bitcoin network.</p>
            <p className="mt-4">For every $100k over $100k MarketCap, we donate $1000 to the IQ Air Foundation!</p>
          </div>
          <Image 
            src="/main.png" 
            alt="Environmental Theme" 
            className=" object-contain -translate-y-7"
            width={700}
            height={700}
          />
        </div>

        {/* Right Side - Stats Box */}
        <div className="bg-green-800 bg-opacity-90 p-6 rounded-lg w-full max-w-md">
          <h2 className="text-white text-xl mb-4">LAUNCH COUNTDOWN</h2>
          
          {/* Timer */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded p-2 text-center">
              <div className="text-2xl text-gray-600 font-bold">{timeLeft.hours}</div>
              <div className="text-sm text-black">HOURS</div>
            </div>
            <div className="bg-white rounded p-2 text-center">
              <div className="text-2xl text-gray-600 font-bold">{timeLeft.minutes}</div>
              <div className="text-sm text-black">MINUTES</div>
            </div>
            <div className="bg-white rounded p-2 text-center">
              <div className="text-2xl font-bold text-gray-600">{timeLeft.seconds}</div>
              <div className="text-sm text-black">SECONDS</div>
            </div>
          </div>

          {/* Stats */}
          <div className="text-white space-y-2 mb-6">
            <div className="flex justify-between">
              <span>Total Supply:</span>
              <span>4.58B THUMB</span>
            </div>
            <div className="flex justify-between">
              <span>Pooled Tokens:</span>
              <span>1.75B THUMB</span>
            </div>
            <div className="flex justify-between">
              <span>Initial MCap:</span>
              <span>$12K</span>
            </div>
          </div>

          {/* Contract Info */}
          <div className="bg-white bg-opacity-20 rounded p-3 mb-4">
            <div className="text-white text-sm mb-2">Contract Address:</div>
            <div className="text-white text-xs break-all">
              3XvyoNUkwJtwKTAyGEsCG3cUwTfhLzbHW7sSyy2RA8ba
            </div>
          </div>

          <button className="w-full bg-white rounded-lg py-3 font-bold text-green-700 mb-4">
            Connect Wallet
          </button>

          <div className="text-center text-white text-sm">
            Contract Renounced | Liquidity Burned | Community Owned
          </div>
                        {/* Buy Button */}
      <div className="text-center mt-8">
        <button className="bg-white text-green-700 px-8 py-3 rounded-full font-bold text-xl">
          Buy $THUMB
        </button>
        </div>



      </div>
      </div>


      <div className="relative min-h-screen  text-black rounded-lg bg-white p-8">
      {/* Background dot pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-screen opacity-20">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-black rounded-full"
            style={{
              top: `${Math.floor(i / 10) * 40}px`,
              left: `${(i % 10) * 40}px`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl pt-40 mx-auto relative">

        {/* Hero Section */}
        <div className="flex items-center justify-between mb-20">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold mb-6">What is GretaTHUMBerg?</h1>
            <p className="text-xl mb-4">
              An eco-friendly crypto token built on{' '}
              <span className="text-green-400">Solana Network</span>.
            </p>
            <p className="text-lg mb-8 opacity-80">
              At its heart, GretaTHUMBerg is the green movement that shows crypto can be
              environmentally friendly! Built on Solana, using 99.9% less power than the Bitcoin
              network, $THUMB is sustainable, tradeable, and good for the planet.
            </p>
            <button className="text-black bg-green-400 px-6 py-3 rounded-full hover:bg-green-500 transition-colors">
              Learn more
            </button>
          </div>
          <div className="relative w-1/2 flex justify-center">
            <img 
              src="/aout.png" 
              alt="Thumbs up logo" 
              className="w-80 h-80 rounded-full"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-400/20 to-transparent rounded-full transform scale-110" />
          </div>
        </div>

        {/* Getting Started Section */}
        <h2 className="text-5xl font-bold mb-12">Getting started</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="relative">
            <div className="bg-green-400/10 rounded-lg p-6 h-full">
              <div className="text-green-400 text-xl font-bold mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4">Buy on Solana</h3>
              <p className="opacity-80">Connect your Solana wallet and swap for $THUMB tokens on your preferred DEX.</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-green-400/10 rounded-lg p-6 h-full">
              <div className="text-green-400 text-xl font-bold mb-4">02</div>
              <h3 className="text-2xl font-bold mb-4">Hold $THUMB</h3>
              <p className="opacity-80">Keep your tokens safe in your wallet and watch the community grow.</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-green-400/10 rounded-lg p-6 h-full">
              <div className="text-green-400 text-xl font-bold mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4">Support Green Crypto</h3>
              <p className="opacity-80">Every $100k MarketCap milestone helps us donate to environmental causes.</p>
            </div>
          </div>
        </div>

        {/* Token Info */}
        <div className="mt-20 bg-green-400/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Token Information</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="mb-2 opacity-80">Contract Address:</p>
              <p className="font-mono text-sm">3XvyoNUkwJtwKTAyGEsCG3cUwTfhLzbHW7sSyy2RA8ba</p>
            </div>
            <div>
              <p className="mb-2 opacity-80">Total Supply:</p>
              <p>4.58B THUMB</p>
            </div>
            <div>
              <p className="mb-2 opacity-80">Initial MCap:</p>
              <p>$12K</p>
            </div>
            <div>
              <p className="mb-2 opacity-80">Pooled Tokens:</p>
              <p>1.75B THUMB</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>

    <div className="min-h-screen  text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-12">
          {/* Left side - Book image and navigation */}
          <div className="w-1/3">
            <div className="mb-8">
              <img 
                src="/book.png" 
                alt="THUMBpedia" 
                className="w-full rounded-lg shadow-lg mb-8"
              />
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={() => setActiveSection('faq')}
                className={`w-full text-left p-4 rounded transition-colors ${
                  activeSection === 'faq' ? 'bg-green-500 text-black' : 'hover:bg-green-500/20'
                }`}
              >
                FAQ
              </button>
              <button 
                onClick={() => setActiveSection('resources')}
                className={`w-full text-left p-4 rounded transition-colors ${
                  activeSection === 'resources' ? 'bg-green-500 text-black' : 'hover:bg-green-500/20'
                }`}
              >
                Resources
              </button>
              <button 
                onClick={() => setActiveSection('howto')}
                className={`w-full text-left p-4 rounded transition-colors ${
                  activeSection === 'howto' ? 'bg-green-500 text-black' : 'hover:bg-green-500/20'
                }`}
              >
                How To's
              </button>
              <button 
                onClick={() => setActiveSection('documentation')}
                className={`w-full text-left p-4 rounded transition-colors ${
                  activeSection === 'documentation' ? 'bg-green-500 text-black' : 'hover:bg-green-500/20'
                }`}
              >
                Documentation
              </button>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-2/3">
            <h2 className="text-4xl font-bold mb-8 text-green-500">
              {activeSection.toUpperCase()}
            </h2>

            <div className="space-y-6">
              {contentData[activeSection].map((item, index) => (
                <div key={index} className="border border-green-500/20 rounded-lg p-6 hover:bg-green-500/5 transition-colors">
                  {activeSection === 'faq' ? (
                    <>
                      <h3 className="text-xl font-bold mb-4">{item.question}</h3>
                      <p className="text-gray-300">{item.answer}</p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-300 whitespace-pre-line">{item.content}</p>
                    </>
                  )}
                </div>
              ))}
            </div>

            <button className="mt-8 px-6 py-3 bg-green-500 text-black rounded-full hover:bg-green-600 transition-colors">
              VIEW ALL
            </button>
          </div>
        </div>
      </div>
    </div>


    <main className="container mx-auto px-4 py-10">
  <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
    Find out more about GretaTHUMBerg
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
    <div className="bg-[#f5f2e3] text-black p-6 rounded-lg">
      <div className="flex justify-center mb-4">
        <FaLeaf size={50} />
      </div>
      <h2 className="text-xl font-semibold mb-2">Sustainability</h2>
      <p className="mb-4">
        $THUMB Token is built on the SOLANA ($SOL) Network, using 99.9% less power than BITCOIN.
      </p>
      <Link href="#" className="inline-block border-b border-black">Visit -&gt;</Link>
    </div>

    <div className="bg-[#f5f2e3] text-black p-6 rounded-lg">
      <div className="flex justify-center mb-4">
        <FaBolt size={50} />
      </div>
      <h2 className="text-xl font-semibold mb-2">Speed & Security</h2>
      <p className="mb-4">
        Built on Solana; this coin is fast and secure!
      </p>
      <Link href="#" className="inline-block border-b border-black">Visit -&gt;</Link>
    </div>

    <div className="bg-[#f5f2e3] text-black p-6 rounded-lg">
      <div className="flex justify-center mb-4">
        <FaGlobe size={50} />
      </div>
      <h2 className="text-xl font-semibold mb-2">Impact</h2>
      <p className="mb-4">
        For every $100k over $100k MarketCap, $1000 will be donated to the IQ Air Foundation.
      </p>
      <Link href="#" className="inline-block border-b border-black">Visit -&gt;</Link>
    </div>

    <div className="bg-[#f5f2e3] text-black p-6 rounded-lg">
      <div className="flex justify-center mb-4">
        <FaHandsHelping size={50} />
      </div>
      <h2 className="text-xl font-semibold mb-2">Community</h2>
      <p className="mb-4">
        Contract renounced—No Owner. Safe and community-driven.
      </p>
      <Link href="#" className="inline-block border-b border-black">Visit -&gt;</Link>
    </div>
  </div>

  <div className="text-center text-gray-400">
    <p className="mb-2">GretaTHUMBerg WhitePaper</p>
    <p>© 2024 | GretaTHUMBerg Project. All rights reserved.</p>
  </div>
</main>

    </div>
  );
}
