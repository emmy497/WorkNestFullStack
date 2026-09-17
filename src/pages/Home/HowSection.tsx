const HowSection = () => {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-[100px] pt-[32px]">
        <div className="hidden lg:block text-[12px] leading-[18px] tracking-[1.38px] uppercase text-center mb-[26px]">
          Roles open right now{" "}
          <span className="text-[#6D4AFF]">through WorkNest</span>
        </div>

        <div className="relative flex flex-wrap justify-center gap-6 sm:gap-8 text-[#C4C2CE] font-[Inter] text-sm sm:text-base px-4 pb-10  lg:flex-nowrap lg:justify-center mb-[115px] lg:gap-[48px] lg:text-[20px] lg:px-0 lg:pb-[59px]">
          <div>Moniepoint</div>
          <div>Paystack</div>
          <div>Kuda</div>
          <div>Flutterwave</div>
          <div>Cowrywise</div>
          <div>Bumpa</div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between mb-10 lg:mb-[63px] gap-6 lg:gap-[165px]">
          <div className="font-['Bricolage_Grotesque'] font-bold text-3xl sm:text-4xl lg:text-[46px] leading-tight lg:leading-[47.84px] tracking-tight lg:tracking-[-1.29px] align-middle [leading-trim:none]">
            Three steps. One of them is the reason people stay
          </div>
          <div className="font-['Inter'] font-normal text-base lg:text-[18px] leading-relaxed lg:leading-[28.8px] tracking-normal align-middle [leading-trim:none] text-[#4B4757]">
            Most job sites end when you hit submit. Ours is just getting started
            because a person on our team picks up your application from there.
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[41px]">
          <div className="flex-1">
            <div className="w-full h-auto lg:h-[283px] rounded-[24px] lg:rounded-[30.94px] border-[1.11px] border-[#ECEBF0] bg-white p-6 lg:p-[35.37px] gap-[10.06px] shadow-[0px_1.11px_3.32px_0px_#1613200F,0px_1.11px_2.21px_0px_#1613200D] mb-6 lg:mb-[46px]">
              <img src="/images/Background.svg" alt="" />
              <div className="font-['Inter'] font-normal text-[11px] lg:text-[12.71px] leading-relaxed lg:leading-[19.06px] tracking-[1.27px] align-middle text-[#8B8798] mt-4 lg:mt-[23px] [leading-trim:none]">
                STEP 01
              </div>

              <div className="font-['Bricolage_Grotesque'] font-bold text-xl lg:text-[24.31px] leading-snug lg:leading-[36.47px] tracking-tight lg:tracking-[-0.49px] align-middle [leading-trim:none] mt-[10px]">
                Build your profile once
              </div>

              <div className="font-['Inter'] font-normal text-sm lg:text-[16.58px] leading-relaxed lg:leading-[26.86px] tracking-normal align-middle [leading-trim:none] text-[#4B4757] mt-[10px]">
                Your details, CV, and work — filled in a single time and reused
                on every application, so you're never re-typing the same forty
                fields.
              </div>
            </div>

            {/* Apply */}
            <div className="w-full h-auto lg:h-[283px] rounded-[24px] lg:rounded-[30.94px] border-[1.11px] border-[#ECEBF0] bg-white p-6 lg:p-[35.37px] gap-[10.06px] shadow-[0px_1.11px_3.32px_0px_#1613200F,0px_1.11px_2.21px_0px_#1613200D]">
              <img src="/images/Bolt.svg" alt="" />
              <div className="font-['Inter'] font-normal text-[11px] lg:text-[12.71px] leading-relaxed lg:leading-[19.06px] tracking-[1.27px] align-middle text-[#8B8798] mt-4 lg:mt-[23px] [leading-trim:none]">
                STEP 02
              </div>

              <div className="font-['Bricolage_Grotesque'] font-bold text-xl lg:text-[24.31px] leading-snug lg:leading-[36.47px] tracking-tight lg:tracking-[-0.49px] align-middle [leading-trim:none] mt-[10px]">
                Apply in one tap
              </div>

              <div className="font-['Inter'] font-normal text-sm lg:text-[16.58px] leading-relaxed lg:leading-[26.86px] tracking-normal align-middle [leading-trim:none] text-[#4B4757] mt-[10px]">
                Answer a couple of role-specific questions and send. Everything
                the company needs is already attached from your profile.
              </div>
            </div>
          </div>
          <div className="relative flex-1">
            <img
              className="w-full h-[320px] sm:h-[420px] lg:h-[603px] rounded-[24px] lg:rounded-[30.94px] shadow-[0px_33.16px_88.41px_0px_#6D4AFF52] object-cover"
              src="/images/reviewImage.svg"
              alt=""
            />
            <div className="absolute top-5 left-5 lg:top-[35px] lg:left-[35px]">
              <img src="/images/Overlay.svg" alt="" />
              <div className="font-['Inter'] font-normal text-[11px] lg:text-[12.71px] leading-relaxed lg:leading-[19.06px] tracking-[1.27px] align-middle [leading-trim:none] text-[#FFC93C] mt-4 lg:mt-[23px]">
                STEP 03
              </div>
            </div>
            <div className="px-5 lg:px-[35px] h-auto absolute bottom-5 lg:bottom-[35px]">
              <div className="font-['Bricolage_Grotesque'] font-bold text-2xl lg:text-[34.26px] leading-tight lg:leading-[51.39px] tracking-tight lg:tracking-[-0.69px] align-middle [leading-trim:none] text-white">
                A real person reviews you
              </div>
              <div className="font-['Inter'] font-normal text-sm lg:text-[17.68px] leading-relaxed lg:leading-[28.65px] tracking-normal align-middle [leading-trim:none] text-[rgba(255,255,255,0.85)]">
                No keyword filter, no black hole. Someone on our team reads your
                application, scores it against the role, and shortlists the
                strongest — then tells you where you stand.
              </div>
              <div className="w-fit h-auto rounded-full py-[6.63px] px-4 lg:px-[13.26px] bg-[#FFC93C] flex items-center justify-center font-['Inter'] font-normal text-[11px] lg:text-[12.16px] leading-relaxed lg:leading-[18.24px] mt-3 lg:mt-[22px] uppercase [leading-trim:none]">
                This is the difference
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*The opposite of shouting into a void. */}
    </>
  );
};

export default HowSection;
