const Pages = () => {
    return (
      <div className="relative bg-gray1-100 w-full h-[1344px] overflow-hidden text-left text-17xl text-gray1-500 font-m3-body-small">
        <div className="absolute top-[76px] left-[162px] flex flex-col items-start justify-start gap-[36px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[232px]">
            <div className="flex flex-row items-start justify-start gap-[20px]">
              <div className="rounded-md bg-whitesmoke-500 overflow-hidden flex flex-row items-start justify-start p-3">
                <img
                  className="relative w-[21.3px] h-[21.3px]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="w-[422px] flex flex-col items-start justify-start gap-[12px]">
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className="relative tracking-[0.5px]">
                    <span>
                      <b>VMS</b>
                    </span>
                    <span className="font-medium">
                      <span>{` / Cameras / `}</span>
                      <span className="text-black">Camera Details</span>
                    </span>
                  </div>
                  <div className="relative text-xs tracking-[0.5px] leading-[24px] capitalize text-gray1-800">
                    Bank Entrance-front-view Camera1
                  </div>
                </div>
                <div className="relative text-sm tracking-[0.5px] leading-[24px] text-black">
                  View and manage camera details, recordings and connection
                  details
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px] text-center text-sm text-black">
              <div className="relative w-[97px] h-12 hidden text-left text-base">
                <div className="absolute top-[0px] left-[0px] rounded bg-whitesmoke-600 w-[97px] h-12" />
                <div className="absolute top-[14px] left-[19px] tracking-[0.1px] leading-[20px] font-medium">
                  Filter by
                </div>
              </div>
              <div className="relative w-[212px] h-12 hidden text-left text-base">
                <div className="absolute top-[0px] left-[0px] rounded bg-whitesmoke-600 w-[212px] h-12" />
                <div className="absolute top-[14px] left-[21px] tracking-[0.1px] leading-[20px] font-medium">
                  Search
                </div>
              </div>
              <div className="rounded-lg box-border w-[122.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-1 px-0 text-darkslategray-200 border-[1.4px] border-solid border-darkslategray-200">
                <div className="flex flex-row items-center justify-center py-2.5 px-6">
                  <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                    Edit Camera
                  </div>
                </div>
              </div>
              <div className="rounded-lg box-border w-[122.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-1 px-0 text-darkslategray-200 border-[1.4px] border-solid border-darkslategray-200">
                <div className="flex flex-row items-center justify-center py-2.5 px-6">
                  <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                    Deactivate
                  </div>
                </div>
              </div>
              <div className="rounded-lg box-border w-[122.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-1 px-0 text-red border-[1.4px] border-solid border-red">
                <div className="flex flex-row items-center justify-center py-2.5 px-6">
                  <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                    Delete Camera
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded bg-white-high-emphasis box-border w-[1102px] h-[1047px] overflow-hidden shrink-0 text-xl text-black border-[1px] border-solid border-gray-divider">
            <div className="absolute top-[35px] left-[calc(50%_-_528px)] flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-start justify-start gap-[12px] text-sm text-gray1-500">
                  <div className="rounded-lg bg-whitesmoke-500 overflow-hidden flex flex-row items-center justify-center py-3 px-[22px] gap-[10px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxvideorecording.svg"
                    />
                    <div className="relative tracking-[0.5px] leading-[24px] font-medium">
                      View Recorded Videos
                    </div>
                  </div>
                  <div className="rounded-lg bg-whitesmoke-500 overflow-hidden flex flex-row items-center justify-center py-3 px-[22px] gap-[10px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/uimrefresh.svg"
                    />
                    <div className="relative tracking-[0.5px] leading-[24px] font-medium">
                      Refetch Camera
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[20px] text-smi text-white-high-emphasis">
                  <div className="relative w-[600px] h-[337px]">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-xl w-[600px] h-[337px] object-cover"
                      alt=""
                      src="/rectangle-31@2x.png"
                    />
                    <div className="absolute top-[309px] left-[calc(50%_-_277px)] flex flex-row items-start justify-start gap-[360px]">
                      <div className="relative tracking-[0.1px] font-semibold">
                        01/05/2023 02:42:21 PM
                      </div>
                      <div className="relative tracking-[0.1px] font-semibold">
                        Hall 01
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-md bg-white-high-emphasis box-border w-[436px] h-[337px] overflow-hidden shrink-0 text-sm text-gray1-500 border-[1px] border-solid border-gray-divider">
                    <div className="absolute top-[22px] left-[calc(50%_-_195px)] w-[390px] flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-row items-start justify-between text-xl text-black">
                        <div className="relative tracking-[0.1px] leading-[20px] font-semibold">
                          Camera Details
                        </div>
                        <div className="rounded bg-limegreen-200 overflow-hidden flex flex-row items-center justify-center py-1 px-2 text-xs text-white-high-emphasis">
                          <div className="relative tracking-[0.5px] font-semibold">
                            Active
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[12px]">
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <div className="relative tracking-[0.1px] font-semibold">
                            Location:
                          </div>
                          <div className="relative text-smi tracking-[0.1px] leading-[20px] text-gray1-400">
                            Coimbatore
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <div className="relative tracking-[0.1px] font-semibold">
                            City:
                          </div>
                          <div className="relative text-smi tracking-[0.1px] text-gray1-400">
                            Coimbatore
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <div className="relative tracking-[0.1px] font-semibold">
                            Timezone:
                          </div>
                          <div className="relative text-smi tracking-[0.1px] text-gray1-400">
                            Delhi-India
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <div className="relative tracking-[0.1px] font-semibold">
                            Date added:
                          </div>
                          <div className="relative text-smi tracking-[0.1px] text-gray1-400">
                            Aug 03, 2023 12:01:42 PM
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <div className="relative tracking-[0.1px] font-semibold">
                            Last update:
                          </div>
                          <div className="relative text-smi tracking-[0.1px] text-gray1-400">
                            Aug 03, 2023 12:01:42 PM
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[12px]">
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <div className="relative tracking-[0.1px] font-semibold">
                            Manufacture details:
                          </div>
                          <div className="relative text-smi tracking-[0.1px] leading-[20px] text-gray1-400">
                            ADT
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <div className="relative tracking-[0.1px] font-semibold">
                            RTSP/HLS URL:
                          </div>
                          <div className="relative text-smi [text-decoration:underline] tracking-[0.1px] text-royalblue-100">
                            Copy URL
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[18px]">
                  <div className="relative tracking-[0.5px] leading-[24px] font-semibold">
                    Camera Health and Alert
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[20px] text-sm text-gray1-500">
                    <div className="relative rounded-md bg-white-high-emphasis box-border w-[338px] h-[162px] overflow-hidden shrink-0 text-smi border-[1px] border-solid border-gray-divider">
                      <div className="absolute top-[calc(50%_-_63px)] left-[calc(50%_-_148px)] w-[297px] flex flex-col items-start justify-start">
                        <div className="flex flex-col items-start justify-start gap-[12px]">
                          <div className="relative text-sm tracking-[0.1px] font-semibold">
                            Offline Alert
                          </div>
                          <div className="relative tracking-[0.1px] text-gray1-400">
                            If camera is continuously offline for
                          </div>
                          <div className="relative text-xl tracking-[0.1px] font-medium">
                            12 minutes
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[6px] text-gray1-400">
                            <div className="relative tracking-[0.1px]">
                              Send an email to
                            </div>
                            <div className="relative tracking-[0.1px] font-semibold text-gray1-500">
                              email.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-md bg-white-high-emphasis box-border w-[338px] h-[162px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-divider">
                      <div className="absolute top-[calc(50%_-_65px)] left-[21px] w-[297px] flex flex-col items-start justify-start">
                        <div className="flex flex-col items-start justify-start gap-[12px]">
                          <div className="relative tracking-[0.1px] font-semibold">
                            Health Grade
                          </div>
                          <div className="relative text-[28px] tracking-[0.1px] font-medium">
                            96%
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[6px] text-smi text-gray1-400">
                            <div className="relative tracking-[0.1px] leading-[18px] flex items-center w-[244px]">
                              Cheers, this camera had no offline time in the last
                              30 days
                            </div>
                            <div className="relative tracking-[0.1px] font-semibold text-forestgreen-100">
                              Grade A
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-md bg-white-high-emphasis box-border w-[338px] h-[162px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-divider">
                      <div className="absolute bottom-[11px] left-[calc(50%_-_148px)] w-[297px] flex flex-col items-start justify-start">
                        <div className="flex flex-col items-start justify-start gap-[12px]">
                          <div className="relative tracking-[0.1px] font-semibold">
                            Health Logs
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[8px] text-smi text-gray1-400">
                            <div className="relative tracking-[0.1px]">
                              Today, 04:37 pm: Activated
                            </div>
                            <div className="relative tracking-[0.1px]">
                              23 Aug, 02:22 pm: Deactivated
                            </div>
                            <div className="relative tracking-[0.1px]">
                              21 Aug, 05:12 am: Activated
                            </div>
                            <div className="relative tracking-[0.1px]">
                              20 Aug, 02:12 am: Deactivated
                            </div>
                            <div className="relative tracking-[0.1px]">
                              19 Aug, 02:12 am: Deactivated
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[18px]">
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="relative tracking-[0.5px] leading-[24px] font-semibold">
                      Recent Recordings
                    </div>
                    <div className="relative text-base [text-decoration:underline] tracking-[0.5px] leading-[24px] font-semibold text-darkslategray-100">
                      View All
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[12px] text-smi text-dimgray-200">
                    <div className="rounded flex flex-col items-start justify-end p-3 gap-[10px] border-[1px] border-solid border-gray-divider">
                      <div className="relative w-[230px] h-[167.7px]">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-xl w-[230px] h-[167.7px] object-cover"
                          alt=""
                          src="/rectangle-311@2x.png"
                        />
                        <img
                          className="absolute top-[68.3px] left-[99px] w-8 h-8"
                          alt=""
                          src="/group-32.svg"
                        />
                        <div className="absolute top-[137.5px] left-[6px] w-0 h-0">
                          <div className="absolute top-[14px] left-[0px] rounded-xl bg-darkgray w-[218.6px] h-[5.6px] hidden" />
                          <div className="absolute top-[14px] left-[0px] rounded-xl bg-gray1-300 w-[16.3px] h-[5.6px] hidden" />
                          <div className="absolute top-[0px] left-[2.7px] tracking-[0.1px] leading-[20px] font-medium hidden w-[39.1px] h-[11.2px]">
                            <span>{`1:24 / `}</span>
                            <span className="text-gray1-200">53.30</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[6px] text-sm text-gray1-500">
                        <div className="relative tracking-[0.1px] font-semibold">
                          Recording_0121
                        </div>
                        <div className="relative text-xs tracking-[0.1px] text-gray1-400">
                          Today, 04:42 pm
                        </div>
                      </div>
                    </div>
                    <div className="rounded flex flex-col items-start justify-end p-3 gap-[10px] border-[1px] border-solid border-gray-divider">
                      <div className="relative w-[230px] h-[167.7px]">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-xl w-[230px] h-[167.7px] object-cover"
                          alt=""
                          src="/rectangle-312@2x.png"
                        />
                        <img
                          className="absolute top-[68.3px] left-[99px] w-8 h-8"
                          alt=""
                          src="/group-32.svg"
                        />
                        <div className="absolute top-[137.5px] left-[6px] w-0 h-0">
                          <div className="absolute top-[14px] left-[0px] rounded-xl bg-darkgray w-[218.6px] h-[5.6px] hidden" />
                          <div className="absolute top-[14px] left-[0px] rounded-xl bg-gray1-300 w-[16.3px] h-[5.6px] hidden" />
                          <div className="absolute top-[0px] left-[2.7px] tracking-[0.1px] leading-[20px] font-medium hidden w-[39.1px] h-[11.2px]">
                            <span>{`1:24 / `}</span>
                            <span className="text-gray1-200">53.30</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[6px] text-sm text-gray1-500">
                        <div className="relative tracking-[0.1px] font-semibold">
                          Recording_0121
                        </div>
                        <div className="relative text-xs tracking-[0.1px] text-gray1-400">
                          Today, 02:14 pm
                        </div>
                      </div>
                    </div>
                    <div className="rounded flex flex-col items-start justify-end p-3 gap-[10px] border-[1px] border-solid border-gray-divider">
                      <div className="relative w-[230px] h-[167.7px]">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-xl w-[230px] h-[167.7px] object-cover"
                          alt=""
                          src="/rectangle-313@2x.png"
                        />
                        <img
                          className="absolute top-[68.3px] left-[99px] w-8 h-8"
                          alt=""
                          src="/group-32.svg"
                        />
                        <div className="absolute top-[137.5px] left-[6px] w-0 h-0">
                          <div className="absolute top-[14px] left-[0px] rounded-xl bg-darkgray w-[218.6px] h-[5.6px] hidden" />
                          <div className="absolute top-[14px] left-[0px] rounded-xl bg-gray1-300 w-[16.3px] h-[5.6px] hidden" />
                          <div className="absolute top-[0px] left-[2.7px] tracking-[0.1px] leading-[20px] font-medium hidden w-[39.1px] h-[11.2px]">
                            <span>{`1:24 / `}</span>
                            <span className="text-gray1-200">53.30</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[6px] text-sm text-gray1-500">
                        <div className="relative tracking-[0.1px] font-semibold">
                          Recording_0121
                        </div>
                        <div className="relative text-xs tracking-[0.1px] text-gray1-400">
                          Today, 02:09 pm
                        </div>
                      </div>
                    </div>
                    <div className="rounded flex flex-col items-start justify-end p-3 gap-[10px] border-[1px] border-solid border-gray-divider">
                      <div className="relative w-[230px] h-[167.7px]">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-xl w-[230px] h-[167.7px] object-cover"
                          alt=""
                          src="/rectangle-311@2x.png"
                        />
                        <img
                          className="absolute top-[68.3px] left-[99px] w-8 h-8"
                          alt=""
                          src="/group-32.svg"
                        />
                        <div className="absolute top-[137.5px] left-[6px] w-0 h-0">
                          <div className="absolute top-[14px] left-[0px] rounded-xl bg-darkgray w-[218.6px] h-[5.6px] hidden" />
                          <div className="absolute top-[14px] left-[0px] rounded-xl bg-gray1-300 w-[16.3px] h-[5.6px] hidden" />
                          <div className="absolute top-[0px] left-[2.7px] tracking-[0.1px] leading-[20px] font-medium hidden w-[39.1px] h-[11.2px]">
                            <span>{`1:24 / `}</span>
                            <span className="text-gray1-200">53.30</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[6px] text-sm text-gray1-500">
                        <div className="relative tracking-[0.1px] font-semibold">
                          Recording_0121
                        </div>
                        <div className="relative text-xs tracking-[0.1px] text-gray1-400">
                          Today, 01:11 pm
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Pages;
  