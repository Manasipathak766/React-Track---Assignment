import { GiCctvCamera } from "react-icons/gi";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { TbInfoTriangleFilled } from "react-icons/tb";
const Charts = () => {
  const percentages = [45.16, 27.77, 21.77, 5.3]; // Example percentages for different colors

  const renderProgress = () => {
    let startAngle = 0;
    const radius = 95; // Adjust the radius as needed
    const strokeWidth = 20; // Adjust the stroke width as needed

    return percentages.map((percentage, index) => {
      const color = ["#19A01E", "#00DB4A", "#FB8B34", "#ED1C24"][index]; // Replace with your desired colors
      const endAngle = (percentage / 100) * 360 + startAngle;

      const x1 = radius * Math.cos((startAngle - 90) * (Math.PI / 180));
      const y1 = radius * Math.sin((startAngle - 90) * (Math.PI / 180));
      const x2 = radius * Math.cos((endAngle - 90) * (Math.PI / 180));
      const y2 = radius * Math.sin((endAngle - 90) * (Math.PI / 180));

      const arcPath = `M ${x1},${y1} A ${radius},${radius} 0 ${
        percentage > 50 ? 1 : 0
      },1 ${x2},${y2}`;

      startAngle = endAngle;

      return (
        <path
          key={index}
          d={arcPath}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      );
    });
  };

  return (
    <div className="relative bg-gainsboro-100 w-full h-[982px] overflow-hidden text-left text-xl text-black font-m3-body-small">
      <div className="absolute top-[353px] left-[218px] rounded-xl bg-white-high-emphasis box-border w-[1076px] overflow-hidden flex flex-col items-start justify-start py-5 px-6 border-[1px] border-solid border-gray-divider">
        <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative tracking-[0.1px] leading-[20px] font-semibold">
              Camera Health
            </div>
            <div className="h-10 hidden flex-row items-start justify-end gap-[16px] text-sm">
              <div className="rounded-lg bg-whitesmoke-500 overflow-hidden flex flex-col items-center justify-center py-2 px-4">
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <div className="relative tracking-[0.5px] leading-[24px] font-medium">
                    Filter by Locations
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/iconparkdown.svg"
                  />
                </div>
              </div>
              <div className="rounded-lg bg-whitesmoke-500 overflow-hidden flex flex-col items-center justify-center py-2 px-4">
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <div className="relative tracking-[0.5px] leading-[24px] font-medium">
                    Filter by Month
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/iconparkdown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[24px] text-17xl">
            <div className="relative w-[200px] h-[200px] flex items-end justify-end">
              <svg viewBox="-120 -120 250 250" width="200" height="200">
                {renderProgress()}
              </svg>
              <div className="absolute bottom-12 right-12 mr-5 mb-5 flex flex-col items-center justify-center gap-[2px]">
                <b className="relative tracking-[0.1px]">124</b>
                <div className="relative text-base tracking-[0.1px]">
                  Cameras
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start gap-[22px] text-sm">
              <div className="self-stretch flex flex-col items-end justify-start gap-[14px]">
                <div className="self-stretch rounded-md bg-whitesmoke-400 flex flex-row items-center justify-start p-4 gap-[10px]">
                <GiCctvCamera className="text-blue-800 text-lg" />
                  <div className="relative tracking-[0.5px]">
                    <span className="font-medium">{`Totally `}</span>
                    <b className="text-base">124</b>
                    <span className="font-medium">
                      {" "}
                      Cameras are in 9 NVRs and installed in 12 Locations
                    </span>
                  </div>
                </div>
                <div className="self-stretch rounded-md bg-pink flex flex-row items-center justify-between p-4 text-base">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                  <TbInfoTriangleFilled className="text-red"/>
                    <div className="relative tracking-[0.5px]">
                      <b>6</b>
                      <span className="text-sm font-medium">
                        {" "}
                        Cameras were experiencing downtime in Last 30 days
                      </span>
                    </div>
                  </div>
                  <div className="cursor-pointer hover:bg-slate-300 hover:border-4 self-stretch rounded-md bg-white-high-emphasis overflow-hidden flex flex-row items-center justify-center p-2.5 text-xs text-gray1-500">
                    <div className=" relative tracking-[0.5px] font-semibold">
                      View Cameras
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <div className="relative rounded-81xl bg-green w-4 h-4" />
                  <div className="relative leading-[18px]">
                    Super Healthy (56)
                  </div>
                  <div className="cursor-pointer ">
                    <HiOutlineInformationCircle className="hover:bg-slate-300" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <div className="relative rounded-81xl bg-limegreen-100 w-4 h-4" />
                  <div className="relative leading-[18px]">Healthy (35)</div>
                  <div className="cursor-pointer ">
                    <HiOutlineInformationCircle className="hover:bg-slate-300" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <div className="relative rounded-81xl bg-chocolate w-4 h-4" />
                  <div className="relative leading-[18px]">Warning (27)</div>
                  <div className="cursor-pointer ">
                    <HiOutlineInformationCircle className="hover:bg-slate-300" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <div className="relative rounded-81xl bg-red w-4 h-4" />
                  <div className="relative leading-[18px]">Danger (6)</div>
                  <div className="cursor-pointer ">
                    <HiOutlineInformationCircle className="hover:bg-slate-300" />
                  </div>
                </div>
                <div className="hidden flex-row items-center justify-start gap-[8px] text-base font-assistant">
                  <div className="relative leading-[18px]">9</div>
                  <div className="relative bg-chart-solid-plasma-20-plsm-17-20 w-4 h-4" />
                </div>
                <div className="hidden flex-row items-center justify-start gap-[8px] text-base font-assistant">
                  <div className="relative leading-[18px]">10</div>
                  <div className="relative bg-chart-solid-plasma-20-plsm-18-20 w-4 h-4" />
                </div>
                <div className="hidden flex-row items-center justify-start gap-[8px] text-base font-assistant">
                  <div className="relative leading-[18px]">11</div>
                  <div className="relative bg-chart-solid-plasma-20-plsm-19-20 w-4 h-4" />
                </div>
                <div className="hidden flex-row items-center justify-start gap-[8px] text-base font-assistant">
                  <div className="relative leading-[18px]">9</div>
                  <div className="relative bg-chart-solid-oi-cvd-8-oi-cvd-purple w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
