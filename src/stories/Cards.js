import {
    BsCameraVideo,
    BsFileEarmarkBarGraph,
    BsFillFileEarmarkBarGraphFill,
} from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
const Cards = () => {
  return (
    <div className="relative bg-gainsboro-100 w-full h-[982px] overflow-hidden text-left text-[24px] text-dimgray-100 font-m3-body-small">
      <div className="absolute top-[421px] left-[900px] w-[348px] h-[140px]">
        <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-white-high-emphasis box-border border-[1px] border-solid border-gray-divider">
          <div className="cursor-pointer  absolute top-[26px] left-[24px] leading-[36px]">
            <BsFileEarmarkBarGraph className="text-black text-2xl hover:text-yellow-500" />
          </div>
        </div>
        <div className="absolute top-[76px] left-[24px] leading-[36px]">
          Recipe Management
        </div>
        <div className="absolute top-[109px] left-[269px] text-xs tracking-[0.4px] leading-[15px] font-medium text-gray1-700">
          Manage
        </div>
      </div>
      <div className="absolute top-[285px] left-[285px] w-[340px] h-[412px] text-xs text-gray1-700">
        <div className="absolute top-[39px] left-[71px] tracking-[0.4px] leading-[15px] font-medium">
          Manage
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-100 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.12)] w-[340px] h-[412px] overflow-hidden text-base text-white-high-emphasis">
          <div className="absolute top-[254.6px] left-[calc(50%_-_146px)] w-[291px] flex flex-col items-start justify-start gap-[12px] text-black">
            <div className="relative tracking-[0.1px] leading-[20px] font-medium">
              Bank Entrance-front-view Camera1
            </div>
            <div className="flex flex-col items-start justify-start gap-[12px] text-smi text-gray1-400">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/carbontasktools.svg"
                />
                <div className="relative tracking-[0.1px] leading-[20px]">
                  3 Recipes Added
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/fluentclipboarderror16regular.svg"
                />
                <div className="relative tracking-[0.1px]">
                  today, 04:45pm: Unidentified face detected
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt="Loading"
                  src="/tdesignlocation.svg"
                />
                <div className="relative tracking-[0.1px]">
                  Coimbatore branch
                </div>
              </div>
            </div>
            <div className=" cursor-pointer self-stretch flex flex-row items-start justify-between text-xs text-white-high-emphasis">
              <div className="rounded hover:shadow-md bg-limegreen-200 overflow-hidden flex flex-row items-center justify-center py-1 px-2">
                <div className="relative tracking-[0.5px] font-semibold">
                  Active
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <div className="text-black hover:text-red cursor-pointer">
                  <MdDeleteOutline />
                </div>
                <div className="text-slate-600 hover:text-black cursor-pointer">
                  <BsCameraVideo />
                </div>
                <div className="text-slate-600 hover:text-black cursor-pointer">
                  <BsFillFileEarmarkBarGraphFill />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[340px] h-[240.6px] text-7xs">
            <img
              className="absolute top-[0px] left-[0px] rounded-t-xl rounded-b-none w-[340px] h-[240.6px] object-cover"
              alt="Loading.."
              src="/rectangle-314@2x.png"
            />
            <div className="absolute top-[12px] left-[130px] box-border w-20 h-20 overflow-hidden border-[2px] border-solid border-limegreen-200">
              <div className="absolute top-[1.7px] left-[1.9px] rounded-t-none rounded-br rounded-bl-none bg-springgreen flex flex-row items-center justify-center py-0.5 px-1.5">
                <b className="relative tracking-[0.1px]">Praveen Kumar</b>
              </div>
              <div className="absolute top-[12.7px] left-[1.9px] rounded-t-none rounded-br rounded-bl-none bg-forestgreen-200 flex flex-row items-center justify-center py-0.5 px-1.5">
                <b className="relative tracking-[0.1px]">Manager</b>
              </div>
              <div className="absolute top-[67.7px] right-[9.1px] bg-royalblue-200 flex flex-row items-center justify-center py-0.5 px-1.5">
                <b className="relative tracking-[0.1px]">In Time: 2:42:21 PM</b>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] right-[0px] rounded-t-none rounded-br-none rounded-bl-xl bg-gray1-700 w-[270px] h-[74px] overflow-hidden opacity-[0] text-2xs">
            <div className="absolute top-[calc(50%_-_28px)] left-[calc(50%_-_121px)] flex flex-row items-start justify-start gap-[10px]">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/fluentclipboarderror16regular1.svg"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.1px] leading-[20px]">
                  Today, 04:45pm: Unidentified face detected
                </div>
                <div className="relative tracking-[0.1px] leading-[20px] mt-[-2px]">
                  Today, 03:22pm: User Clocked-In
                </div>
                <div className="relative tracking-[0.1px] leading-[20px] mt-[-2px]">
                  Today, 03:12pm: Unidentified face detected
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
