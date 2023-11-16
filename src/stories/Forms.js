import { FaUserCircle } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
const Forms = () => {
  return (
    <div className="relative bg-gainsboro-100 w-full h-[982px] overflow-hidden text-left text-[40px] text-black font-m3-body-small">
      <div className="absolute top-[calc(50%_-_350px)] left-[calc(50%_-_301px)] shadow-[2px_2px_20px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start">
        <div className="rounded-2xl bg-white-high-emphasis overflow-hidden flex flex-col items-start justify-start pt-[60px] px-[72px] pb-[90px]">
          <div className="flex flex-col items-center justify-start gap-[36px]">
            <b className="relative">XYZ</b>
            <div className="rounded text-4xl">
              <FaUserCircle className="text-slate-500 cursor-pointer  hover:shadow hover:text-blue-700" />
            </div>
            <div className="w-[458px] flex flex-col items-end justify-start text-17xl">
              <div className="w-[458px] flex flex-col items-center justify-start gap-[30px]">
                <div className="relative">Welcome Onboard</div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base text-m3-sys-light-on-surface">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
                    <img
                      className="relative w-6 h-6 hidden"
                      alt=""
                      src="/component-1email.svg"
                    />
                    <div className="cursor-text hover:shadow-lg flex-1 rounded-t rounded-b-none h-14 flex flex-col items-start justify-start">
                      <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-variant flex flex-col items-start justify-start">
                        <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-2 px-4">
                          <div className="flex-1 h-10 flex flex-col items-start justify-center">
                            <div className="flex flex-row items-center justify-start">
                              <div className="relative tracking-[0.5px] leading-[24px]">
                                Your Name
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface" />
                      <div className="self-stretch hidden flex-row items-start justify-start pt-1 px-4 pb-0 text-xs">
                        <div className="flex-1 relative tracking-[0.4px] leading-[16px]">
                          Supporting text
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
                    <img
                      className="relative w-6 h-6 hidden"
                      alt=""
                      src="/component-1key.svg"
                    />
                    <div className="cursor-text hover:shadow-lg flex-1 rounded-t rounded-b-none h-14 flex flex-col items-start justify-start">
                      <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-variant flex flex-col items-start justify-start">
                        <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-2 px-4">
                          <div className="flex-1 h-10 flex flex-col items-start justify-center">
                            <div className="flex flex-row items-center justify-start">
                              <div className="relative tracking-[0.5px] leading-[24px]">
                                Company Name
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface" />
                      <div className="self-stretch hidden flex-row items-start justify-start pt-1 px-4 pb-0 text-xs">
                        <div className="flex-1 relative tracking-[0.4px] leading-[16px]">
                          Supporting text
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
                    <img
                      className="relative w-6 h-6 hidden"
                      alt=""
                      src="/component-1key.svg"
                    />
                    <div className="hover:shadow-lg flex-1 rounded-t rounded-b-none h-14 flex flex-col items-start justify-start">
                      <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-variant flex flex-col items-start justify-start">
                        <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-1 pr-0 pl-4">
                          <div className="flex-1 h-10 flex flex-col items-start justify-center">
                            <div className="flex flex-row items-center justify-start">
                              <div className="relative tracking-[0.5px] leading-[24px]">
                                Select Industry
                              </div>
                            </div>
                          </div>
                          <div className="cursor-pointer  w-12 h-12 flex flex-col items-center justify-center">
                            <div className="rounded-81xl  overflow-hidden flex flex-row items-center justify-center">
                              <div className="flex text-3xl flex-row items-center justify-center p-2">
                                <MdOutlineArrowDropDown className=" hover:shadow-lg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface" />
                      <div className="self-stretch hidden flex-row items-start justify-start pt-1 px-4 pb-0 text-xs">
                        <div className="flex-1 relative tracking-[0.4px] leading-[16px]">
                          Supporting text
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[12px]">
                    <div className="relative tracking-[0.5px] leading-[24px] font-medium">
                      Select Number of Locations
                    </div>
                    <div className="cursor-pointer flex flex-row items-start justify-start gap-[12px] text-gray1-500">
                      <div className="relative rounded hover:bg-slate-300 bg-m3-sys-light-surface-variant w-20 h-[42px] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_17px)] tracking-[0.5px] leading-[24px] font-semibold">
                          1-10
                        </div>
                      </div>
                      <div className="cursor-pointer relative rounded hover:bg-slate-300 bg-m3-sys-light-surface-variant w-20 h-[42px] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_22px)] tracking-[0.5px] leading-[24px] font-semibold">
                          10-50
                        </div>
                      </div>
                      <div className="cursor-pointer relative rounded  bg-gray1-500 w-20 h-[42px] overflow-hidden shrink-0 text-white-high-emphasis">
                        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_27px)] tracking-[0.5px] leading-[24px] font-semibold">
                          50-150
                        </div>
                      </div>
                      <div className="cursor-pointer relative rounded hover:bg-slate-300 bg-m3-sys-light-surface-variant w-20 h-[42px] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_19px)] tracking-[0.5px] leading-[24px] font-semibold">
                          150+
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer hover:bg-green self-stretch rounded-lg bg-slate-500 overflow-hidden flex flex-col items-center justify-center py-1.5 px-10 text-center text-[18px] text-white-high-emphasis">
              <div className="flex flex-row items-center justify-center py-2.5 px-6">
                <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                  CONTINUE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
