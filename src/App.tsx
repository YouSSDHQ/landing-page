'use client';

import Logo from '@/assets/images/logo.png';
import HeroImg from '@/assets/images/hero_img.png';
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
import { Notify } from 'notiflix';
import { ReactNode, useEffect, useState } from 'react';
import { Tweet } from 'react-tweet';

interface Strategy {
  title: string;
  icon: ReactNode;
  features: {
    icon: ReactNode;
    text: string;
  }[];
  buttonText: string;
}

interface Tweet {
  id: string;
}

interface Features {
  title: string;
  description: string;
}

export default function App() {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState<boolean>(false);
  const [isDrawn, setIsDrawn] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsDrawn((prevState) => !prevState);
    }, 3000);

    return () => clearInterval(intervalId);
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

  const supportedFeatures: Features[] = [
    {
      title: 'Quick Payments',
      description: 'Send and receive payments with ease using USSD.',
    },
    {
      title: 'Rotary Savings',
      description:
        'Join or create decentralized, secure savings groups for community-driven wealth building.',
    },
    {
      title: 'Airtime On/Off Ramping',
      description: 'Seamlessly convert airtime to funds and vice versa.',
    },
    {
      title: '`Ite` Donations',
      description: 'Contribute to community funds and earn NFT rewards.',
    },
  ];

  const latestTweets: Tweet[] = [
    {
      id: '1843548814713729243',
    },
    {
      id: '1843265078642307367',
    },
    {
      id: '1843249962882351245',
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
            target="_blank"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5 text-gray-400 hover:text-white" />
          </a>
          <a
            className={buttonVariants({ variant: 'ghost', size: 'icon' })}
            href="https://x.com/use_youssd"
            target="_blank"
            aria-label="X"
          >
            <svg
              className="h-5 w-5 fill-gray-400 hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 462.799"
            >
              <path
                fillRule="nonzero"
                d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
              />
            </svg>
          </a>
        </div>
      </header>

      <main>
        <ScrollAnimationWrapper prefersReducedMotion={prefersReducedMotion}>
          <section className="container mx-auto md:grid md:grid-cols-2 w-full max-md:px-5 py-20">
            <div className="grid gap-y-5 md:gap-y-2">
              <h1 className="font-axiforma text-3xl md:text-5xl font-bold">
                Maximize{' '}
                <span className="text-green-400">Financial Inclusion</span> with
                <br />
                <span
                  className={`block scribble px-2 py-3 ${
                    isDrawn ? 'is-drawn' : 'is-undrawn'
                  }`}
                >
                  Blockchain-Powered USSD Payments.
                </span>
              </h1>
              <p className="text-xl max-w-[40ch] text-gray-400">
                Bringing the power of blockchain to every mobile phone. No
                internet required.
              </p>
              <div className="mt-auto flex space-x-6">
                <Button
                  size={'lg'}
                  className="bg-green-400 text-black hover:bg-green-500 lg:h-14 lg:text-xl lg:px-10"
                  onClick={() => Notify.info('Coming soon')}
                >
                  Join Waitlist
                </Button>
                <a
                  className={`text-green-400 border-green-400 hover:bg-green-400 hover:text-black lg:h-14 lg:text-xl lg:px-10 ${buttonVariants(
                    { variant: 'outline', size: 'lg' }
                  )}`}
                  href="https://x.com/use_youssd"
                  target="_blank"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                src={HeroImg}
                alt="Illustration of USSD"
                className="max-w-[450px]"
              />
            </div>
          </section>
        </ScrollAnimationWrapper>

        <section className="bg-gray-900 py-20">
          <ScrollAnimationWrapper
            className="max-md:px-5 container mx-auto"
            prefersReducedMotion={prefersReducedMotion}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
              <p className="text-gray-400">
                We simplify transactions and financial services for everyone,
                anywhere, with our USSD-based platform:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportedFeatures.map((feature) => (
                <AnimatedCard
                  key={feature.title}
                  prefersReducedMotion={prefersReducedMotion}
                >
                  <Card className="grid h-full bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-green-400">
                        {feature.title}
                      </CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="outline" className="mt-auto w-full">
                        View More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </section>

        <ScrollAnimationWrapper prefersReducedMotion={prefersReducedMotion}>
          <section className="container max-md:px-5 mx-auto py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                We reduce the barriers to financial inclusion.
              </h2>
              <p className="text-gray-400">
                Unlock borderless payments and decentralized savings for every
                mobile phone user. Low fees, fast transactions, and no internet
                required.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">X+</div>
                <div className="text-gray-400">Transactions Processed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">X+</div>
                <div className="text-gray-400">Countries Reached</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">X+</div>
                <div className="text-gray-400">Mobile Users Accessible</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  $X Million
                </div>
                <div className="text-gray-400">Processed in Transactions</div>
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
              <h2 className="text-3xl font-bold mb-4">Latest Tweets</h2>
              <p className="text-gray-400">
                Stay updated with our latest news and updates from X{' '}
                <a
                  target="_blank"
                  href="https://x.com/use_youssd"
                  className="text-green-400"
                >
                  @use_youssd
                </a>
                .
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-md:px-5 dark">
              {latestTweets.map((tweet) => (
                <Tweet key={tweet.id} id={tweet.id} />
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
                <Button
                  className="bg-green-400 text-black hover:bg-green-500"
                  onClick={() => Notify.info('Coming soon')}
                >
                  Join Waitlist
                </Button>
                <a
                  className={`text-green-400 border-green-400 hover:bg-green-400 hover:text-black ${buttonVariants(
                    { variant: 'outline' }
                  )}`}
                  href="https://x.com/use_youssd"
                  target="_blank"
                >
                  Contact Us
                </a>
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
