'use client';

import AnimatedCard from '@/components/base/AnimatedCard';
import ScrollAnimationWrapper from '@/components/base/ScrollAnimationWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, BarChart2, GithubIcon, Layers, Zap } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';
import Logo from '@/assets/images/logo.png';

interface Strategy {
  title: string;
  icon: ReactNode;
  features: {
    icon: ReactNode;
    text: string;
  }[];
  buttonText: string;
}

interface Article {
  title: string;
  date: string;
  description: string;
}

export default function App() {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const strategies: Strategy[] = [
    {
      title: 'Automated Strategies',
      icon: <Zap className="mr-2" />,
      features: [
        {
          icon: <BarChart2 className="mr-2 text-green-400" />,
          text: 'Optimized Profitability',
        },
        {
          icon: <Layers className="mr-2 text-green-400" />,
          text: 'Multi-Chain Support',
        },
      ],
      buttonText: 'Learn More',
    },
    {
      title: 'Enterprise Strategies',
      icon: <Layers className="mr-2" />,
      features: [
        {
          icon: <BarChart2 className="mr-2 text-green-400" />,
          text: 'Custom Solutions',
        },
        {
          icon: <Zap className="mr-2 text-green-400" />,
          text: 'Advanced Risk Management',
        },
      ],
      buttonText: 'Contact Us',
    },
  ];

  const articles: Article[] = [
    {
      title: 'Article Title 1',
      date: 'Dec 15, 2023',
      description: 'Short description of the article goes here...',
    },
    {
      title: 'Article Title 2',
      date: 'Dec 16, 2023',
      description: 'Another interesting article description...',
    },
    {
      title: 'Article Title 3',
      date: 'Dec 17, 2023',
      description: 'Yet another captivating article summary...',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="max-md:px-5 container mx-auto py-6 flex justify-between items-center">
        <img src={Logo} alt="YouSSD Logo" className="h-7 lg:h-10" />

        <div className="flex items-center space-x-2">
          <a
            className={buttonVariants({ variant: 'ghost', size: 'icon' })}
            href="https://github.com/YouSSDHQ"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5 text-gray-400 hover:text-white" />
          </a>
          <a
            className={buttonVariants({ variant: 'ghost', size: 'icon' })}
            href="https://x.com/use_youssd"
            aria-label="X"
          >
            <svg
              className="h-5 w-5 fill-gray-400 hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512 462.799"
            >
              <path
                fill-rule="nonzero"
                d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
              />
            </svg>
          </a>
        </div>
      </header>

      <main>
        <ScrollAnimationWrapper prefersReducedMotion={prefersReducedMotion}>
          <section className="container mx-auto max-md:px-5 py-20 text-center">
            <h1 className="font-axiforma text-4xl md:text-6xl font-bold mb-6">
              Maximize Capital Efficiency with
              <span className="text-green-400">
                {' '}
                Dynamic Liquidity Solutions.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Optimize your liquidity across multiple protocols and strategies
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-green-400 text-black hover:bg-green-500">
                Join Waitlist
              </Button>
              <Button
                variant="outline"
                className="text-green-400 border-green-400 hover:bg-green-400 hover:text-black"
              >
                Contact Us
              </Button>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <section className="bg-gray-900 py-20">
          <ScrollAnimationWrapper
            className="max-md:px-5 container mx-auto"
            prefersReducedMotion={prefersReducedMotion}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Supported AMMs</h2>
              <p className="text-gray-400">
                We support various automated market makers to maximize your
                opportunities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedCard prefersReducedMotion={prefersReducedMotion}>
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-green-400">Quick Swap</CardTitle>
                    <CardDescription>Decentralized Exchange</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>
              <AnimatedCard prefersReducedMotion={prefersReducedMotion}>
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-green-400">UniSwap</CardTitle>
                    <CardDescription>Decentralized Protocol</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>
            </div>
          </ScrollAnimationWrapper>
        </section>

        <ScrollAnimationWrapper prefersReducedMotion={prefersReducedMotion}>
          <section className="container max-md:px-5 mx-auto py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                We reduce the costs of sourcing liquidity.
              </h2>
              <p className="text-gray-400">
                Maximize your capital efficiency with our advanced solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  50+
                </div>
                <div className="text-gray-400">Strategies Deployed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  10+
                </div>
                <div className="text-gray-400">Liquidity Protocols</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  10+
                </div>
                <div className="text-gray-400">Networks</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  $100M+
                </div>
                <div className="text-gray-400">Total Value Locked</div>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <section className="bg-gray-900 py-20">
          <ScrollAnimationWrapper
            className="container mx-auto"
            prefersReducedMotion={prefersReducedMotion}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-md:px-5">
              {strategies.map((strategy, index) => (
                <AnimatedCard
                  key={index}
                  prefersReducedMotion={prefersReducedMotion}
                >
                  <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-green-400 flex items-center">
                        {strategy.icon} {strategy.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {strategy.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-white flex items-center"
                          >
                            {feature.icon}
                            {feature.text}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        {strategy.buttonText}
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </section>

        <ScrollAnimationWrapper prefersReducedMotion={prefersReducedMotion}>
          <section className="container mx-auto py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
              <p className="text-gray-400">
                Stay updated with our latest insights and news
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-md:px-5">
              {articles.map((article, index) => (
                <AnimatedCard
                  key={index}
                  prefersReducedMotion={prefersReducedMotion}
                >
                  <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-green-400">
                        {article.title}
                      </CardTitle>
                      <CardDescription>{article.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{article.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="text-green-400">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper prefersReducedMotion={prefersReducedMotion}>
          <section className="bg-gray-900 py-20">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">YouSSD</h2>
              <p className="text-gray-400 mb-8">
                Bridging the gap between Web3 and everyday transactions
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-green-400 text-black hover:bg-green-500">
                  Join Waitlist
                </Button>
                <Button
                  variant="outline"
                  className="text-green-400 border-green-400 hover:bg-green-400 hover:text-black"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>
      </main>

      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          © 2024 YouSSD. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
