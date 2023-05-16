import Head from "next/head";
import { Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Students = () => {
  return (
    <>
      <Head>
        <title>Internship</title>
      </Head>
      <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-[28px] text-white font-inter">
        <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[261px] h-[1024px] overflow-hidden">
          <div className="absolute top-[107px] left-[18px] w-[177px] flex flex-col items-center justify-start gap-[36px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[25px] flex flex-row items-center justify-center gap-[6px]">
              <div className="relative rounded-10xs bg-white w-[13px] h-[13px] overflow-hidden shrink-0" />
              <div className="relative text-base tracking-[0.04em] font-medium font-inter text-white text-left inline-block w-[119px] h-[19px] shrink-0">
                Home
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[25px] flex flex-row items-center justify-center gap-[6px]">
              <div className="relative rounded-10xs bg-white w-[13px] h-[13px] overflow-hidden shrink-0" />
              <div className="relative text-base tracking-[0.04em] font-medium font-inter text-white text-left inline-block w-[119px] h-[19px] shrink-0">{`Students `}</div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[25px] flex flex-row items-center justify-center gap-[6px]">
              <div className="relative rounded-10xs bg-white w-[13px] h-[13px] overflow-hidden shrink-0" />
              <div className="relative text-base tracking-[0.04em] font-medium font-inter text-white text-left inline-block w-[119px] h-[19px] shrink-0">
                Events
              </div>
            </button>
            <div className="relative box-border w-32 h-px border-t-[1px] border-solid border-slategray" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[25px] flex flex-row items-center justify-center gap-[6px]">
              <div className="relative rounded-10xs bg-white shadow-[0px_1px_5px_#fff] w-[13px] h-[13px] overflow-hidden shrink-0" />
              <div className="relative text-base tracking-[0.04em] font-medium font-inter text-white text-left inline-block w-[119px] h-[19px] shrink-0">
                Profile
              </div>
            </button>
          </div>
          <img
            className="absolute top-[29px] left-[18px] w-[169px] h-[38px] object-cover"
            alt=""
            src="/neatskillsremovebgpreview-1@2x.png"
          />
          <button className="cursor-pointer [border:none] py-[11px] pr-[3px] pl-0 bg-gray-400 absolute top-[888px] left-[40px] rounded-3xs w-36 h-[41px] overflow-hidden flex flex-row box-border items-center justify-center gap-[10px]">
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              src="/gearsix.svg"
            />
            <div className="w-[57px] flex flex-row items-center justify-start">
              <div className="relative text-sm font-semibold font-inter text-white text-left inline-block w-[67px] h-[17px] shrink-0">
                Settings
              </div>
            </div>
          </button>
        </div>
        <div className="absolute top-[0px] left-[202px] rounded-tl-31xl rounded-tr-none rounded-br-none rounded-bl-31xl bg-darkslategray-300 w-[1238px] h-[1024px] overflow-hidden">
          <div className="absolute top-[0px] left-[2px] rounded-tl-31xl rounded-tr-none rounded-b-none bg-darkslategray-400 w-[1231px] h-[94px] overflow-hidden">
            <div className="absolute top-[105.5px] left-[-0.5px] box-border w-[1227px] h-px border-t-[1px] border-solid border-slategray" />
            <div className="absolute top-[26px] left-[71px] w-[1117px] h-[51px]">
              <div className="absolute top-[9px] left-[0px] font-medium inline-block w-[263px] h-8">
                Students
              </div>
              <div className="absolute top-[0px] left-[64px] flex flex-row items-end justify-start gap-[87px] text-center text-mini">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative rounded-3xs box-border w-[298px] h-[47px] overflow-hidden shrink-0 hidden border-[1px] border-solid border-slategray">
                    <div className="absolute top-[11px] left-[421px] flex flex-row items-center justify-start gap-[7px]">
                      <img
                        className="relative w-[25px] h-[25px]"
                        alt=""
                        src="/magnifyingglass.svg"
                      />
                      <div className="relative inline-block w-16 h-[19px] shrink-0">{`Search `}</div>
                    </div>
                  </div>
                </div>
                <div className="relative w-[87px] h-[51px]">
                  <img
                    className="absolute top-[0px] left-[921px] rounded-[999px] w-[51px] h-[51px] overflow-hidden object-cover"
                    alt=""
                    src="/male@2x.png"
                  />
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[54.9%] w-[32.18%] top-[29.41%] right-[67.82%] bottom-[15.69%] left-[1000%]">
                    <img
                      className="absolute h-full w-[96%] top-[0%] right-[4%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/bell.svg"
                    />
                    <div className="absolute h-[46.43%] w-[46.43%] top-[0%] right-[0%] bottom-[53.57%] left-[53.57%] overflow-hidden">
                      <img
                        className="absolute top-[0px] left-[0px] w-[13px] h-[13px]"
                        alt=""
                        src="/ellipse-40.svg"
                      />
                      <div className="absolute top-[0px] left-[4px] text-[10.4px] leading-[12.83px] font-semibold font-inter text-white text-center inline-block w-[4.68px] h-[10.66px]">
                        1
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <img
              className="absolute top-[93.5px] left-[0px] w-[1231px] h-[0.5px]"
              alt=""
              src="/line-5.svg"
            />
          </div>
          <div className="absolute top-[261px] left-[39px] rounded-11xl bg-darkslategray-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[1159px] h-[729px] overflow-hidden text-center text-sm border-[1px] border-solid border-gray-600">
            <div className="absolute top-[68.5px] left-[-0.5px] box-border w-[1187px] h-px border-t-[1px] border-solid border-gray-200" />
            <div className="absolute top-[113px] left-[32px] flex flex-col items-start justify-start gap-[33px]">
              <div className="relative w-[1052.17px] h-[35.41px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[540.09px] w-[35.75px] h-[35.41px] overflow-hidden object-cover"
                  alt=""
                  src="/male1@2x.png"
                />
                <div className="absolute top-[8.41px] left-[57.17px] w-[100px] h-[15px]">
                  <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[100px] h-[15px]">
                    Rachit Rajput
                  </div>
                </div>
                <div className="absolute top-[8.41px] left-[269.17px] font-medium inline-block w-[86px] h-[15px]">
                  ID : 53424
                </div>
                <div className="absolute top-[8.41px] left-[505.17px] font-medium">
                  5
                </div>
                <div className="absolute top-[8px] left-[646px] font-semibold inline-block w-[75px] h-[15px]">
                  Yesterday
                </div>
                <div className="absolute top-[8.41px] left-[809.17px] font-medium inline-block w-[37px] h-[15px]">
                  8
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[8.41px] left-[969.17px] text-sm font-semibold font-inter text-mediumvioletred text-center inline-block w-[83px] h-[15px]">{`View Profile `}</button>
              </div>
              <div className="relative w-[1052.17px] h-[35.41px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[540.09px] w-[35.75px] h-[35.41px] overflow-hidden object-cover"
                  alt=""
                  src="/male2@2x.png"
                />
                <div className="absolute top-[8.41px] left-[57.17px] w-[100px] h-[15px]">
                  <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[100px] h-[15px]">
                    Rachit Rajput
                  </div>
                </div>
                <div className="absolute top-[8.41px] left-[269.17px] font-medium inline-block w-[86px] h-[15px]">
                  ID : 53424
                </div>
                <div className="absolute top-[8.41px] left-[478.17px] font-medium inline-block w-[63px] h-[15px]">
                  5
                </div>
                <div className="absolute top-[8px] left-[646px] font-semibold inline-block w-[75px] h-[15px]">
                  Yesterday
                </div>
                <div className="absolute top-[8.41px] left-[809.17px] font-medium inline-block w-[37px] h-[15px]">
                  4
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[8.41px] left-[969.17px] text-sm font-semibold font-inter text-mediumvioletred text-center inline-block w-[83px] h-[15px]">{`View Profile `}</button>
              </div>
              <div className="relative w-[1052.17px] h-[35.41px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[540.09px] w-[35.75px] h-[35.41px] overflow-hidden object-cover"
                  alt=""
                  src="/male3@2x.png"
                />
                <div className="absolute top-[8.41px] left-[57.17px] w-[100px] h-[15px]">
                  <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[100px] h-[15px]">
                    Rachit Rajput
                  </div>
                </div>
                <div className="absolute top-[8.41px] left-[269.17px] font-medium inline-block w-[86px] h-[15px]">
                  ID : 53424
                </div>
                <div className="absolute top-[8.41px] left-[478.17px] font-medium inline-block w-[63px] h-[15px]">
                  5
                </div>
                <div className="absolute top-[8px] left-[646px] font-semibold inline-block w-[75px] h-[15px]">
                  Yesterday
                </div>
                <div className="absolute top-[8.41px] left-[809.17px] font-medium inline-block w-[37px] h-[15px]">
                  2
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[8.41px] left-[969.17px] text-sm font-semibold font-inter text-mediumvioletred text-center inline-block w-[83px] h-[15px]">{`View Profile `}</button>
              </div>
              <div className="relative w-[1052.17px] h-[35.41px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[540.09px] w-[35.75px] h-[35.41px] overflow-hidden object-cover"
                  alt=""
                  src="/male4@2x.png"
                />
                <div className="absolute top-[8.41px] left-[57.17px] w-[100px] h-[15px]">
                  <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[100px] h-[15px]">
                    Rachit Rajput
                  </div>
                </div>
                <div className="absolute top-[8.41px] left-[269.17px] font-medium inline-block w-[86px] h-[15px]">
                  ID : 53424
                </div>
                <div className="absolute top-[8.41px] left-[478.17px] font-medium inline-block w-[63px] h-[15px]">
                  5
                </div>
                <div className="absolute top-[8px] left-[646px] font-semibold inline-block w-[75px] h-[15px]">
                  Yesterday
                </div>
                <div className="absolute top-[8.41px] left-[809.17px] font-medium inline-block w-[37px] h-[15px]">
                  4
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[8.41px] left-[969.17px] text-sm font-semibold font-inter text-mediumvioletred text-center inline-block w-[83px] h-[15px]">{`View Profile `}</button>
              </div>
              <div className="relative w-[1052.17px] h-[35.41px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[540.09px] w-[35.75px] h-[35.41px] overflow-hidden object-cover"
                  alt=""
                  src="/male5@2x.png"
                />
                <div className="absolute top-[8.41px] left-[57.17px] w-[100px] h-[15px]">
                  <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[100px] h-[15px]">
                    Rachit Rajput
                  </div>
                </div>
                <div className="absolute top-[8.41px] left-[269.17px] font-medium inline-block w-[86px] h-[15px]">
                  ID : 53424
                </div>
                <div className="absolute top-[8.41px] left-[478.17px] font-medium inline-block w-[63px] h-[15px]">
                  5
                </div>
                <div className="absolute top-[8px] left-[646px] font-semibold inline-block w-[75px] h-[15px]">
                  Yesterday
                </div>
                <div className="absolute top-[8.41px] left-[809.17px] font-medium inline-block w-[37px] h-[15px]">
                  5
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[8.41px] left-[969.17px] text-sm font-semibold font-inter text-mediumvioletred text-center inline-block w-[83px] h-[15px]">{`View Profile `}</button>
              </div>
              <div className="relative w-[1052.17px] h-[35.41px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[540.09px] w-[35.75px] h-[35.41px] overflow-hidden object-cover"
                  alt=""
                  src="/male6@2x.png"
                />
                <div className="absolute top-[8.41px] left-[57.17px] w-[100px] h-[15px]">
                  <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[100px] h-[15px]">
                    Rachit Rajput
                  </div>
                </div>
                <div className="absolute top-[8.41px] left-[269.17px] font-medium inline-block w-[86px] h-[15px]">
                  ID : 53424
                </div>
                <div className="absolute top-[8.41px] left-[478.17px] font-medium inline-block w-[63px] h-[15px]">
                  5
                </div>
                <div className="absolute top-[8px] left-[646px] font-semibold inline-block w-[75px] h-[15px]">
                  Yesterday
                </div>
                <div className="absolute top-[8.41px] left-[809.17px] font-medium inline-block w-[37px] h-[15px]">
                  5
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[8.41px] left-[969.17px] text-sm font-semibold font-inter text-mediumvioletred text-center inline-block w-[83px] h-[15px]">{`View Profile `}</button>
              </div>
              <div className="relative w-[1052.17px] h-[35.41px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[540.09px] w-[35.75px] h-[35.41px] overflow-hidden object-cover"
                  alt=""
                  src="/male7@2x.png"
                />
                <div className="absolute top-[8.41px] left-[57.17px] w-[100px] h-[15px]">
                  <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[100px] h-[15px]">
                    Rachit Rajput
                  </div>
                </div>
                <div className="absolute top-[8.41px] left-[269.17px] font-medium inline-block w-[86px] h-[15px]">
                  ID : 53424
                </div>
                <div className="absolute top-[8.41px] left-[478.17px] font-medium inline-block w-[63px] h-[15px]">
                  5
                </div>
                <div className="absolute top-[8px] left-[646px] font-semibold inline-block w-[75px] h-[15px]">
                  Yesterday
                </div>
                <div className="absolute top-[8.41px] left-[809.17px] font-medium inline-block w-[37px] h-[15px]">
                  2
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[8.41px] left-[969.17px] text-sm font-semibold font-inter text-mediumvioletred text-center inline-block w-[83px] h-[15px]">{`View Profile `}</button>
              </div>
              <div className="relative w-[1052.17px] h-[35.41px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[540.09px] w-[35.75px] h-[35.41px] overflow-hidden object-cover"
                  alt=""
                  src="/male8@2x.png"
                />
                <div className="absolute top-[8.41px] left-[57.17px] w-[100px] h-[15px]">
                  <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[100px] h-[15px]">
                    Rachit Rajput
                  </div>
                </div>
                <div className="absolute top-[8.41px] left-[269.17px] font-medium inline-block w-[86px] h-[15px]">
                  ID : 53424
                </div>
                <div className="absolute top-[8.41px] left-[478.17px] font-medium inline-block w-[63px] h-[15px]">
                  5
                </div>
                <div className="absolute top-[8px] left-[646px] font-semibold inline-block w-[75px] h-[15px]">
                  Yesterday
                </div>
                <div className="absolute top-[8.41px] left-[809.17px] font-medium inline-block w-[37px] h-[15px]">
                  1
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[8.41px] left-[969.17px] text-sm font-semibold font-inter text-mediumvioletred text-center inline-block w-[83px] h-[15px]">{`View Profile `}</button>
              </div>
            </div>
            <div className="absolute top-[0px] left-[-1px] rounded-t-11xl rounded-b-none bg-gray-300 w-[1160px] h-[69px] overflow-hidden text-base font-raleway">
              <div className="absolute top-[27px] left-[78px] w-[996px] h-4">
                <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[118px] h-4">
                  Student Name
                </div>
                <div className="absolute top-[0px] left-[254px] font-semibold inline-block w-[23px] h-4">
                  Id
                </div>
                <div className="absolute top-[0px] left-[442px] font-semibold inline-block w-[51px] h-4">
                  Class
                </div>
                <div className="absolute top-[0px] left-[608px] font-semibold inline-block w-[51px] h-4">
                  Active
                </div>
                <div className="absolute top-[0px] left-[748px] font-semibold inline-block w-[68px] h-4">
                  Courses
                </div>
                <div className="absolute top-[0px] left-[945px] font-semibold inline-block w-[51px] h-4">
                  Action
                </div>
              </div>
            </div>
            <div className="absolute top-[671px] left-[29px] flex flex-row items-center justify-start gap-[11px]">
              <button className="cursor-pointer py-1.5 px-[7px] bg-[transparent] rounded-8xs box-border w-[22px] overflow-hidden shrink-0 flex flex-row items-center justify-center [transform:_rotate(0deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-400">
                <img
                  className="relative w-[5px] h-2"
                  alt=""
                  src="/vector.svg"
                />
              </button>
              <button className="cursor-pointer [border:none] py-2.5 px-[11px] bg-[transparent] rounded-3xs w-[42px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-center mix-blend-normal hover:bg-mediumvioletred active:bg-mediumvioletred">
                <div className="relative text-base font-semibold font-inter text-white text-center">
                  1
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-2.5 px-[11px] bg-[transparent] rounded-3xs w-[42px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-center hover:bg-mediumvioletred active:bg-mediumvioletred">
                <div className="relative text-base font-semibold font-inter text-white text-center">
                  2
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-2.5 px-[11px] bg-[transparent] rounded-3xs w-[42px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-center hover:bg-mediumvioletred active:[background:linear-gradient(#fff,_#fff),_#e1348b]">
                <div className="relative text-base font-semibold font-inter text-white text-center">
                  3
                </div>
              </button>
              <button className="cursor-pointer py-1.5 px-[7px] bg-[transparent] rounded-8xs box-border w-[22px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-gray-500">
                <img
                  className="relative w-[5px] h-2"
                  alt=""
                  src="/vector1.svg"
                />
              </button>
            </div>
          </div>
          <div className="absolute top-[198px] left-[39px] flex flex-row items-end justify-start gap-[29px]">
            <Menu>
              <MenuButton
                w="120px"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="purple"
              >
                Class
              </MenuButton>
              <MenuList>
                <MenuItem value="5" className="bg-zinc-500 hover:bg-zinc-950">5</MenuItem>
                <MenuItem value="6" className="bg-zinc-500 hover:bg-zinc-950">6</MenuItem>
                <MenuItem value="7" className="bg-zinc-500 hover:bg-zinc-950">7</MenuItem>
                <MenuItem value="8" className="bg-zinc-500 hover:bg-zinc-950">8</MenuItem>
                <MenuItem value="9" className="bg-zinc-500 hover:bg-zinc-950">9</MenuItem>
                <MenuItem value="9" className="bg-zinc-500 hover:bg-zinc-950">9</MenuItem>
                <MenuItem value="10" className="bg-zinc-500 hover:bg-zinc-950">10</MenuItem>
                <MenuItem value="11" className="bg-zinc-500 hover:bg-zinc-950">11</MenuItem>
                <MenuItem value="12" className="bg-zinc-500 hover:bg-zinc-950">12</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                w="120px"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="purple"
              >
                Skills
              </MenuButton>
              <MenuList>
                <MenuItem value="Design" className="bg-zinc-500 hover:bg-zinc-950">Design</MenuItem>
                <MenuItem value="Python" className="bg-zinc-500 hover:bg-zinc-950">Python</MenuItem>
                <MenuItem value="C++" className="bg-zinc-500 hover:bg-zinc-950">C++</MenuItem>
                <MenuItem value="Marketing" className="bg-zinc-500 hover:bg-zinc-950">Marketing</MenuItem>
                <MenuItem value="Arts" className="bg-zinc-500 hover:bg-zinc-950">Arts</MenuItem>
                <MenuItem value="Literature" className="bg-zinc-500 hover:bg-zinc-950">Literature</MenuItem>
                <MenuItem value="Business" className="bg-zinc-500 hover:bg-zinc-950">Business</MenuItem>
                <MenuItem value="Music" className="bg-zinc-500 hover:bg-zinc-950">Music</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                w="157px"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="purple"
              >
                Performance
              </MenuButton>
              <MenuList>
                <MenuItem value="Best to Poor" className="bg-zinc-500 hover:bg-zinc-950">Best to Poor</MenuItem>
                <MenuItem value="Poor to Best" className="bg-zinc-500 hover:bg-zinc-950">Poor to Best</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="absolute top-[132px] left-[39px] text-[24px] font-medium inline-block w-[324px]">
            Track Progress of students
          </div>
          <input
            className="[border:none] font-semibold font-raleway text-mini bg-darkslategray-100 absolute top-[29px] left-[656px] rounded-3xs w-[365px] overflow-hidden flex flex-row py-[11px] pr-0 pl-3.5 box-border items-center justify-start"
            type="text"
            placeholder="Search Students"
          />
          <button className="cursor-pointer [border:none] py-4 pr-[34px] pl-[21px] bg-mediumvioletred absolute top-[186px] left-[967px] rounded-3xs h-[53px] overflow-hidden flex flex-row box-border items-center justify-center gap-[10px]">
            <img
              className="relative w-[41px] h-[37px] overflow-hidden shrink-0"
              alt=""
              src="/download.svg"
            />
            <div className="relative text-[20px] font-medium font-inter text-white text-center">
              Download All
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Students;
