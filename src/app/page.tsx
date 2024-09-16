'use client';

import {
  landingImage1,
  looseAppImage,
  looseAppLogoInvert,
} from '@/assets/images';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Input } from '@/components/common/Input';
import { Wrapper } from '@/components/common/Wrapper';
import Header from '@/components/Header';
import LooseCarousel from '@/components/LooseCarousel';
import { ArrowLongDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';
import { IoLogoTiktok } from 'react-icons/io5';

export default function Home() {
  return (
    <main>
      <Wrapper>
        <Header />
      </Wrapper>
      <section>
        <div className="max-w-5xl mx-auto p-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex-1 min-w-[300px]">
              <h1 className="text-h2 sm:text-h1">
                <span className="text-[#6F3FD7]">
                  Find Your
                  <br /> Voice{' '}
                </span>
                and <br /> be heard
              </h1>
              <div className="max-w-lg flex justify-center gap-8 py-4 items-center">
                <div className="h-20 w-40 flex items-center justify-center bg-white rounded-full">
                  <ArrowLongDownIcon />
                </div>
                <p>
                  With Loose you can let out your emotions, share your story and
                  start feeling heard and understood. Active listening and
                  empathy goes a long way in our world and our listeners are
                  here to help.
                </p>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center min-w-[300px]">
              <Image
                alt="image"
                src={landingImage1}
                width={603}
                height={728}
                className="h-[400px] w-[350px] sm:h-[500px] sm:w-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="h-6 w-full bg-white"></div>
      <section>
        <div className="max-w-5xl mx-auto p-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex-1 flex items-center justify-center min-w-[300px]">
              <Image
                alt="image"
                src={landingImage1}
                width={603}
                height={728}
                className="h-[400px] w-[350px] sm:h-[500px] sm:w-[400px]"
              />
            </div>
            <div className="flex-1 min-w-[300px]">
              <h1 className="text-h2">
                How <span className="text-[#6F3FD7]">can we</span>
                <br />
                help you ?
              </h1>
              <div className="space-y-6 py-4">
                <p>
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <p>
                  Duis lobortis arcu libero, vitae volutpat enim bibendum et.
                  Maecenas porta porttitor lectus. Phasellus vitae quam vitae
                  massa tempus
                </p>
              </div>

              <Button className="mt-4" rounded>
                <p>Get help</p>
                <ChevronRightIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#6F3FD7]">
        <div className="max-w-5xl mx-auto space-y-6 p-8">
          <div className="flex flex-wrap justify-between items-center gap-6 w-full">
            <div className="flex-1 min-w-[300px] space-y-4 text-white">
              <h1 className="text-h2 font-bold">
                Download the LooseApp
                <br /> on the
                <br />
                <span className="text-[#CCFA7C]">
                  App Store and Google Play!
                </span>
              </h1>
              <div className="flex gap-4 items-center">
                <Link href="https://apps.apple.com/app/looseapp/id6504262165">
                  <Button size="lg" rounded kinds="normal">
                    App Store
                  </Button>
                </Link>
                <Button size="lg" rounded kinds="normal">
                  Play Store
                </Button>
              </div>
            </div>
            <div className="flex-1 min-w-[300px] flex justify-center">
              <Image width={400} height={500} alt="image" src={looseAppImage} />
            </div>
          </div>
        </div>
      </section>
      <div className="h-12 w-full bg-white"></div>

      <section>
        <div className="max-w-5xl mx-auto p-6">
          <div className="flex flex-wrap justify-between gap-4 items-center">
            <div className="flex-1 flex items-center justify-center min-w-[300px]">
              <Card className="bg-[#E2DCFF] p-10 w-[400px] h-[400px] flex flex-col">
                <div className="w-full">
                  <Image
                    className="w-full h-[200px] rounded-xl object-cover"
                    src={landingImage1}
                    alt="image"
                  />
                  <hr className="bg-brown-700 my-4 w-full" />
                  <p>Dr. Veronica</p>
                  <hr className="bg-brown-700 my-4 w-full" />
                  <p>
                    Duis lobortis arcu libero, vitae volutpat enim bibendum et.
                    Maecenas porta porttitor lectus.
                  </p>
                </div>
              </Card>
            </div>
            <div className="flex-1 flex flex-col items-center min-w-[300px] space-y-6 ">
              <h1 className="text-h3 font-bold text-end">
                &ldquo; Felt a connection
                <br />
                <span className="text-end">with a listener &rdquo;</span>
              </h1>
              <p className="max-w-sm">
                Lorem Ipsum has been the industry standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto p-8">
          <div className="w-full">
            <div className="flex flex-wrap justify-between items-center gap-6 py-5">
              <h1 className="text-h3 font-bold">
                See our top<span className="text-[#6F3FD7]"> listeners</span>
              </h1>
            </div>
            <div className="w-[300px] md:w-full mx-auto">
              <LooseCarousel>
                <Card className="h-[250px] w-[280px] flex-1 bg-[#f7f0e8] space-y-2 p-4">
                  <Image
                    alt="image"
                    width={100}
                    height={100}
                    className="h-12 w-12 rounded-full object-cover"
                    src={landingImage1}
                  />
                  <p className="font-semibold">Femi Fola</p>
                  <p>
                    {' '}
                    Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type
                  </p>
                </Card>
                <Card className="h-[250px] w-[280px] flex-1 bg-[#c9ff85] space-y-2 p-4">
                  <Image
                    alt="image"
                    width={100}
                    height={100}
                    className="h-12 w-12 rounded-full object-cover"
                    src={landingImage1}
                  />
                  <p className="font-semibold">Femi Fola</p>
                  <p>
                    {' '}
                    Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type
                  </p>
                </Card>
                <Card className="h-[250px] w-[280px] flex-1 bg-[#ffd86f] space-y-2 p-4">
                  <Image
                    alt="image"
                    width={100}
                    height={100}
                    className="h-12 w-12 rounded-full object-cover"
                    src={landingImage1}
                  />
                  <p className="font-semibold">Femi Fola</p>
                  <p>
                    {' '}
                    Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type
                  </p>
                </Card>
              </LooseCarousel>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto p-6">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-h3 font-bold sm:text-h2">
              Recommendations for you
            </h1>

            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center justify-center text-center flex-1 min-w-[150px] space-y-2">
                <Image
                  className="h-[150px] w-full max-w-[200px] rounded-xl object-cover"
                  src={landingImage1}
                  alt="image"
                />
                <p>Bring inner peace</p>
                <p>Happy tunes generate more peaceful solutions</p>
              </div>

              <div className="flex flex-col items-center justify-center text-center flex-1 min-w-[150px] space-y-2">
                <Image
                  className="h-[150px] w-full max-w-[200px] rounded-xl object-cover"
                  src={landingImage1}
                  alt="image"
                />
                <p>Bring inner peace</p>
                <p>Happy tunes generate more peaceful solutions</p>
              </div>

              <div className="flex flex-col items-center justify-center text-center flex-1 min-w-[150px] space-y-2">
                <Image
                  className="h-[150px] w-full max-w-[200px] rounded-xl object-cover"
                  src={landingImage1}
                  alt="image"
                />
                <p>Bring inner peace</p>
                <p>Happy tunes generate more peaceful solutions</p>
              </div>

              <div className="flex flex-col items-center justify-center text-center flex-1 min-w-[150px] space-y-2">
                <Image
                  className="h-[150px] w-full max-w-[200px] rounded-xl object-cover"
                  src={landingImage1}
                  alt="image"
                />
                <p>Bring inner peace</p>
                <p>Happy tunes generate more peaceful solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto p-8">
          <div className="w-full">
            <div className="flex flex-wrap justify-between items-center gap-6 py-5">
              <h1 className="text-h3 font-bold">
                What people say about LooseApp
              </h1>
            </div>
            <div className="w-[300px] md:w-full mx-auto">
              <LooseCarousel>
                <Card className="h-[250px] w-[280px] bg-[#f7f0e8] space-y-2 p-4">
                  <Image
                    alt="image"
                    width={100}
                    height={100}
                    className="h-12 w-12 rounded-full object-cover"
                    src={landingImage1}
                  />
                  <p className="font-semibold">Femi Fola</p>
                  <p>
                    {' '}
                    Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type
                  </p>
                </Card>
                <Card className="h-[250px] w-[280px] bg-[#c9ff85] space-y-2 p-4">
                  <Image
                    alt="image"
                    width={100}
                    height={100}
                    className="h-12 w-12 rounded-full object-cover"
                    src={landingImage1}
                  />
                  <p className="font-semibold">Femi Fola</p>
                  <p>
                    {' '}
                    Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type
                  </p>
                </Card>
                <Card className="h-[250px] w-[280px] bg-[#ffd86f] space-y-2 p-4">
                  <Image
                    alt="image"
                    width={100}
                    height={100}
                    className="h-12 w-12 rounded-full object-cover"
                    src={landingImage1}
                  />
                  <p className="font-semibold">Femi Fola</p>
                  <p>
                    {' '}
                    Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type
                  </p>
                </Card>
              </LooseCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#242424] text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="space-y-4 flex-1">
              <div className="flex gap-2 justify-between p-6">
                <div className="space-y-4">
                  <h1 className="text-h2 sm:text-h1">48K</h1>
                  <p>people who enrolled</p>
                </div>
                <div className="space-y-4">
                  <h1 className="text-h2 sm:text-h1">58K</h1>
                  <p>people who enrolled</p>
                </div>
              </div>
              <hr className="bg-white my-4 w-full" />
              <div className="space-y-4 p-6">
                <div className="flex justify-between">
                  <p>Contact:</p>
                  <p>+234070123456</p>
                </div>
                <div className="flex justify-between">
                  <p>Email:</p>
                  <p>info@yourcompany.com</p>
                </div>
              </div>
            </div>

            <div className="border-l h-80 border-gray-300 lg:block hidden"></div>

            <div className="flex flex-col justify-center items-center py-4 space-y-4 lg:space-y-6 lg:flex-1 flex-1">
              <Link href="/">
                <Image
                  alt="logo"
                  width={100}
                  height={100}
                  src={looseAppLogoInvert}
                />
              </Link>
              <form
                className="flex flex-col items-center justify-center space-y-2"
                action=""
              >
                <p className="text-center">Subscribe to our newsletter!</p>
                <Input className="w-40" placeholder="Email Address" />
                <Button
                  className="w-40"
                  type="submit"
                  rounded
                  size="md"
                  kinds="normal"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>

          <hr className="bg-white my-4 w-full" />
          <div className="flex flex-col sm:flex-row justify-between items-center text-white">
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              <IoLogoTwitter />
              <IoLogoInstagram />
              <IoLogoTiktok />
              <IoLogoLinkedin />
            </div>
            <p className="text-center sm:text-left">
              &copy; 2024 YourCompany. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
              <p>Privacy</p>
              <p>Sitemap</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
