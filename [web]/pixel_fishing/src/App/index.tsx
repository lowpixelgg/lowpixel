import { useMta } from "../context/GameContext";
import { RegisterMTAEvent } from "../hooks/RegisterMTAEvent";
import * as Styles from "./styles";

import { useState } from "react";

interface FishProps {
  id: number;
  ImageURL: string;
  rarity: string;
  price: number;
  amount: number;
}

interface TaskProps {
  id: number;
  title: string;
  description: string;
  mission: {
    totalCompleted: number;
    totalRequired: number;
  };
  reward: {
    money?: number;
    experience?: number;
  };
}

interface DataProps {
  fishes: FishProps[];
  tasks: TaskProps[];
  level: {
    currentExperience: number;
    currentLevel: number;
    experienceToUpgrade: number;
  };
}

type SelectedFishes = number[];

export function App() {
  const [data, setData] = useState<DataProps | null>(null);
  const [selectedFishes, setSelectedFishes] = useState<SelectedFishes>([]);
  const { addEventListener } = useMta();

  const calcLoaderPercentage = (currentExperience: number) => {
    const experienceInCurrentLevel = currentExperience % 1000;
    const percentage = (experienceInCurrentLevel / 1000) * 100;

    return percentage.toFixed(2) + "%";
  };

  const handleSelectedFishes = (id: number) => {
    if (selectedFishes.includes(id)) {
      setSelectedFishes(selectedFishes.filter((c) => c !== id));

      return;
    }

    setSelectedFishes([...selectedFishes, id]);
  };

  const handleCloseUI = () => {
    RegisterMTAEvent("pixel_fisher:onCloseNUI", true);
  };

  const handleSellFishing = () => {
    const fishesToSell = selectedFishes
      .map((fishId) => {
        return data?.fishes.find((fish) => fish.id === fishId);
      })
      .filter((fish) => fish !== undefined);

    RegisterMTAEvent("pixel_fisher:onSellFishing", fishesToSell);
  };

  const calculateTotal = () => {
    return selectedFishes.reduce((total: any, id: number) => {
      const fish = data?.fishes.find((c) => c.id == id);

      if (fish) {
        return total + fish.price * fish.amount;
      }
    }, 0);
  };

  addEventListener("sendFrontData", (response: DataProps) => {
    setData(response);
    setSelectedFishes([]);
  });

  addEventListener("updateGlobalContext", (response: DataProps) => {
    setData(response);
    setSelectedFishes([]);
  });

  if (!data) return <h1>Erro</h1>;

  return (
    <Styles.Root>
      <Styles.Header>
        <Styles.Title>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="27"
            viewBox="0 0 25 27"
            fill="none"
          >
            <path
              d="M15.7408 0.726562C15.7685 2.46189 16.5465 3.96272 17.8578 5.62192L18.0856 5.91086L15.6463 9.46708H19.0136L19.7137 6.52764L20.0693 6.48875C21.1084 6.38317 22.3475 5.92197 23.4033 5.38298C23.7978 5.17739 24.159 4.96624 24.4924 4.75509C24.259 4.75509 24.0812 4.76231 23.8145 4.75509C22.5698 4.72119 21.1084 4.61506 20.0693 4.18498C18.9358 3.71212 17.7022 2.64081 16.6965 1.68174C16.3298 1.33112 16.013 1.01273 15.7408 0.726562ZM0.839654 0.793242C-0.237769 3.45151 0.812426 7.1222 2.16323 9.46708H3.28844C3.24399 9.33372 3.22176 9.19481 3.22176 9.05033C3.22176 8.28908 3.84966 7.66119 4.61091 7.66119C5.37216 7.66119 6.00006 8.28908 6.00006 9.05033C6.00006 9.19481 5.97783 9.33372 5.93338 9.46708H9.30623C8.41717 7.40003 6.98357 4.87178 4.70537 2.96809C4.98876 4.03329 5.38328 5.06626 6.02784 6.05533L5.18324 6.59988C4.22751 5.12182 3.77742 3.57765 3.46625 2.0557C2.67722 1.54838 1.80483 1.11719 0.839654 0.793242ZM4.61091 8.66137C4.38865 8.66137 4.22195 8.82807 4.22195 9.05033C4.22195 9.2726 4.38865 9.43929 4.61091 9.43929C4.83317 9.43929 4.99987 9.2726 4.99987 9.05033C4.99987 8.82807 4.83317 8.66137 4.61091 8.66137ZM1.62147 10.4673V12.1342H12.5402C12.6346 11.812 12.7235 11.4841 12.818 11.1563L13.7848 11.423C13.7182 11.6619 13.6515 11.8953 13.5848 12.1342H20.1805V10.4673H1.62147ZM2.61054 13.1344L4.36086 22.4417C7.01691 21.3526 8.72834 19.8412 9.95635 18.0687C10.9843 16.5851 11.6678 14.9014 12.229 13.1344H2.61054ZM13.2847 13.1344C12.6902 15.057 11.9512 16.9407 10.7732 18.641C9.41736 20.5914 7.467 22.2806 4.54423 23.4419L5.09433 26.3591H16.7076L19.1914 13.1344H13.2847Z"
              fill="white"
              fill-opacity="0.9"
            />
          </svg>

          <p>
            <h1>
              Pesca
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="14"
                viewBox="0 0 6 14"
                fill="none"
              >
                <path
                  d="M4.71094 0.398438C4.38479 0.398438 4.07199 0.528001 3.84137 0.758626C3.61074 0.989252 3.48118 1.30205 3.48118 1.6282C3.48118 1.95435 3.61074 2.26715 3.84137 2.49777C4.07199 2.7284 4.38479 2.85796 4.71094 2.85796C5.03709 2.85796 5.34989 2.7284 5.58051 2.49777C5.81114 2.26715 5.9407 1.95435 5.9407 1.6282C5.9407 1.30205 5.81114 0.989252 5.58051 0.758626C5.34989 0.528001 5.03709 0.398438 4.71094 0.398438ZM4.4158 4.30908C3.44019 4.39107 0.7757 6.51446 0.7757 6.51446C0.611731 6.63743 0.660922 6.62923 0.792097 6.85879C0.923272 7.08015 0.906875 7.09654 1.06264 6.98996C1.22661 6.88338 1.49716 6.71122 1.94807 6.43247C3.68614 5.31749 2.22682 7.89179 1.48076 12.2288C1.18562 14.3767 3.12045 13.2699 3.62055 12.942C4.11246 12.6223 5.4324 11.7123 5.56357 11.6221C5.74394 11.4991 5.61277 11.4007 5.47339 11.1958C5.37501 11.0564 5.27663 11.1548 5.27663 11.1548C4.74373 11.5073 3.76812 12.2451 3.63695 11.7778C3.48118 11.3105 4.48138 8.10495 5.03068 5.89957C5.12086 5.37488 5.36681 4.2271 4.4158 4.30908Z"
                  fill="white"
                  fill-opacity="0.15"
                />
              </svg>
            </h1>
            <span>Venda seus peixes abaixo:</span>
          </p>
        </Styles.Title>

        <Styles.CloseButton onClick={() => handleCloseUI()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M11.9568 0.981268C11.8716 0.895894 11.7704 0.828161 11.659 0.781947C11.5476 0.735732 11.4281 0.711944 11.3075 0.711944C11.1869 0.711944 11.0675 0.735732 10.9561 0.781947C10.8447 0.828161 10.7435 0.895894 10.6583 0.981268L6.15485 5.47546L1.65145 0.972059C1.56618 0.886796 1.46496 0.819162 1.35356 0.773018C1.24216 0.726875 1.12276 0.703125 1.00218 0.703125C0.881603 0.703125 0.762204 0.726875 0.650803 0.773018C0.539402 0.819162 0.438181 0.886796 0.352918 0.972059C0.267656 1.05732 0.200022 1.15854 0.153878 1.26994C0.107734 1.38134 0.0839844 1.50074 0.0839844 1.62132C0.0839844 1.7419 0.107734 1.8613 0.153878 1.9727C0.200022 2.0841 0.267656 2.18532 0.352918 2.27059L4.85632 6.77399L0.352918 11.2774C0.267656 11.3627 0.200022 11.4639 0.153878 11.5753C0.107734 11.6867 0.0839844 11.8061 0.0839844 11.9267C0.0839844 12.0472 0.107734 12.1666 0.153878 12.278C0.200022 12.3894 0.267656 12.4907 0.352918 12.5759C0.438181 12.6612 0.539402 12.7288 0.650803 12.775C0.762204 12.8211 0.881603 12.8449 1.00218 12.8449C1.12276 12.8449 1.24216 12.8211 1.35356 12.775C1.46496 12.7288 1.56618 12.6612 1.65145 12.5759L6.15485 8.07252L10.6583 12.5759C10.7435 12.6612 10.8447 12.7288 10.9561 12.775C11.0675 12.8211 11.1869 12.8449 11.3075 12.8449C11.4281 12.8449 11.5475 12.8211 11.6589 12.775C11.7703 12.7288 11.8715 12.6612 11.9568 12.5759C12.042 12.4907 12.1097 12.3894 12.1558 12.278C12.202 12.1666 12.2257 12.0472 12.2257 11.9267C12.2257 11.8061 12.202 11.6867 12.1558 11.5753C12.1097 11.4639 12.042 11.3627 11.9568 11.2774L7.45338 6.77399L11.9568 2.27059C12.3067 1.92063 12.3067 1.33123 11.9568 0.981268Z"
              fill="white"
              fill-opacity="0.35"
            />
          </svg>
        </Styles.CloseButton>
      </Styles.Header>

      <Styles.Main>
        <Styles.FishesWrapper>
          {data.fishes.length >= 1 &&
            data.fishes.map((fish, index) => (
              <Styles.Fish
                key={index}
                style={{
                  background: selectedFishes.includes(fish.id) ? "#444651" : "",
                }}
              >
                <img src={fish.ImageURL} alt="Fish Image" />

                <span className="Rarity">{fish.rarity}</span>

                <span className="Price">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(fish.price)}
                </span>

                <button
                  className={selectedFishes.includes(fish.id) ? "Selected" : ""}
                  onClick={() => handleSelectedFishes(fish.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M12.75 12.5C11.9175 12.5 11.25 13.1675 11.25 14C11.25 14.3978 11.408 14.7794 11.6893 15.0607C11.9706 15.342 12.3522 15.5 12.75 15.5C13.1478 15.5 13.5294 15.342 13.8107 15.0607C14.092 14.7794 14.25 14.3978 14.25 14C14.25 13.6022 14.092 13.2206 13.8107 12.9393C13.5294 12.658 13.1478 12.5 12.75 12.5ZM0.75 0.5V2H2.25L4.95 7.6925L3.93 9.53C3.8175 9.74 3.75 9.9875 3.75 10.25C3.75 10.6478 3.90804 11.0294 4.18934 11.3107C4.47064 11.592 4.85217 11.75 5.25 11.75H14.25V10.25H5.565C5.51527 10.25 5.46758 10.2302 5.43242 10.1951C5.39725 10.1599 5.3775 10.1122 5.3775 10.0625C5.3775 10.025 5.385 9.995 5.4 9.9725L6.075 8.75H11.6625C12.225 8.75 12.72 8.435 12.975 7.9775L15.66 3.125C15.7125 3.005 15.75 2.8775 15.75 2.75C15.75 2.55109 15.671 2.36032 15.5303 2.21967C15.3897 2.07902 15.1989 2 15 2H3.9075L3.2025 0.5M5.25 12.5C4.4175 12.5 3.75 13.1675 3.75 14C3.75 14.3978 3.90804 14.7794 4.18934 15.0607C4.47064 15.342 4.85217 15.5 5.25 15.5C5.64782 15.5 6.02936 15.342 6.31066 15.0607C6.59196 14.7794 6.75 14.3978 6.75 14C6.75 13.6022 6.59196 13.2206 6.31066 12.9393C6.02936 12.658 5.64782 12.5 5.25 12.5Z"
                      fill="#3F404B"
                    />
                  </svg>
                </button>
              </Styles.Fish>
            ))}
        </Styles.FishesWrapper>

        <Styles.TasksSection>
          <Styles.TasksWrapper>
            <div className="Title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M5.55829 13.6008H12.5735C13.0558 13.6008 13.4504 13.2062 13.4504 12.7239V1.32417C13.4504 0.841872 13.0558 0.447266 12.5735 0.447266H5.55829C5.076 0.447266 4.68139 0.841872 4.68139 1.32417V12.7239C4.68139 13.2062 5.076 13.6008 5.55829 13.6008ZM1.17378 11.847H2.92758C3.40988 11.847 3.80449 11.4524 3.80449 10.9701V3.07797C3.80449 2.59568 3.40988 2.20107 2.92758 2.20107H1.17378C0.691481 2.20107 0.296875 2.59568 0.296875 3.07797V10.9701C0.296875 11.4524 0.691481 11.847 1.17378 11.847ZM14.3273 3.07797V10.9701C14.3273 11.4524 14.7219 11.847 15.2042 11.847H16.958C17.4403 11.847 17.8349 11.4524 17.8349 10.9701V3.07797C17.8349 2.59568 17.4403 2.20107 16.958 2.20107H15.2042C14.7219 2.20107 14.3273 2.59568 14.3273 3.07797Z"
                  fill="white"
                  fill-opacity="0.6"
                />
              </svg>
              Suas Tarefas
            </div>

            {data.tasks.length >= 1 &&
              data.tasks.map((task, index) => (
                <Styles.TaskRoot key={index}>
                  <Styles.TaskDescription>
                    <div className="Title">
                      <span></span>
                      <h3>{task.title}</h3>
                    </div>

                    <p>{task.description}</p>
                  </Styles.TaskDescription>

                  <Styles.TaskCounter>
                    {task.mission.totalCompleted}/{task.mission.totalRequired}
                  </Styles.TaskCounter>

                  <Styles.TaskRewards>
                    <span className="Money">${task.reward.money}</span>
                    <span className="XP">{task.reward.experience} XP</span>
                  </Styles.TaskRewards>
                </Styles.TaskRoot>
              ))}
          </Styles.TasksWrapper>

          <Styles.FishCounterDisplay>
            <div className="Value">
              <h6>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(calculateTotal())}
              </h6>

              <span>
                {selectedFishes.reduce(
                  (totalAmount, fish) => totalAmount + fish,
                  0
                )}
              </span>
            </div>

            <p>Vender os peixes da tarefa atual fará seu progresso aumentar.</p>
          </Styles.FishCounterDisplay>
        </Styles.TasksSection>
      </Styles.Main>

      <Styles.Footer>
        <Styles.LevelWrapper>
          <Styles.CurrentExperience>
            <h4>Current XP: {data.level.currentExperience}XP</h4>
            <span>Vendas</span>
          </Styles.CurrentExperience>

          <Styles.ExperienceLoaderWrapper>
            <Styles.ExperienceLoading
              style={{
                width: calcLoaderPercentage(data.level.currentExperience),
              }}
            />
          </Styles.ExperienceLoaderWrapper>

          <Styles.CurrentLevel>{data.level.currentLevel}LV</Styles.CurrentLevel>
        </Styles.LevelWrapper>

        <Styles.SellFish onClick={handleSellFishing}>Vender</Styles.SellFish>
      </Styles.Footer>
    </Styles.Root>
  );
}
