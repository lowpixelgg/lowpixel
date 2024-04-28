import styled from "styled-components"

export const Root = styled.div`
  width: 102.8rem;
  height: 59.5rem;
  border-radius: 5px;
  padding: 2rem 3rem;
  background: ${({ theme }) => theme.colors.black_primary };
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

  > p {
    display: flex;
    flex-direction: column;
    
    h1 {
      font-family: 'Inter', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;

      svg {
        margin-left: 1rem;
        color: ${({ theme }) => theme.colors.text_secondary };
      }
    }
    
    span {
      font-size: 1.5rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.text_secondary };
    }
  }
`

export const CloseButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: ${({ theme }) => theme.vars.transition };
  border: 1px solid ${({ theme }) => theme.colors.black_secondary };
  background: ${({ theme }) => theme.colors.black_tertiary };

  &:hover {
    filter: brightness(1.6);
  }
`

export const Main = styled.main`
  width: 100%;
  height: 42rem;
  display: grid;
  grid-template-columns: 1fr 28.6rem;
  gap: 1rem;
`

export const FishesWrapper = styled.section`
  width: 100%;
  height: 38.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: .1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.main };
  }
`

export const Fish = styled.div`
  position: relative;
  width: 15.4rem;
  height: 19.3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
  border-radius: 4px;
  transition: ${({ theme }) => theme.vars.transition };
  background: ${({ theme }) => theme.colors.black_secondary };

  > img {
    margin: auto;
  }

  > .Rarity {
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: .4rem;
    color: ${({ theme }) => theme.colors.orange };
  }

  > .Price {
    font-family: 'Inter', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text_primary };
  }

  > button {
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    transition: ${({ theme }) => theme.vars.transition };
    color: ${({ theme }) => theme.colors.gray_secondary };
    background: ${({ theme }) => theme.colors.gray_primary };

    > svg path {
      transition: ${({ theme }) => theme.vars.transition };
      fill: ${({ theme }) => theme.colors.gray_secondary };
    }

    &:hover {
      background: ${({ theme }) => theme.colors.main };

      > svg path {
        fill: ${({ theme }) => theme.colors.text_primary };
      }
    }
  }

  > button.Selected {
    background: ${({ theme }) => theme.colors.main };

    > svg path {
      fill: ${({ theme }) => theme.colors.text_primary };
    }
  }
`

export const TasksSection = styled.section`
  width: 100%;
  height: 100%;
`

export const TasksWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 33rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-radius: 4px;
  padding: 1.3rem;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.black_secondary };

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.03);
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.main };
    border-radius: 25px;
  }

  > .Title {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: .4rem;
    color: rgba(255, 255, 255, 0.60);
  }
`

export const TaskRoot = styled.div`
  position: relative;
  width: 100%;
  height: 14rem;
  display: flex;
  flex-direction: column;
`

export const TaskDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .3rem;
  padding: 0 1.5rem;
  margin-bottom: 2rem;

  > .Title {
    display: flex;
    align-items: center;
    gap: .6rem;

    span {
      width: .92rem;
      height: .92rem;
      border-radius: 9999px;
      background: ${({ theme }) => theme.colors.blue };
    }

    > h3 {
      font-size: 1.5rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  > p {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: start;
    color: rgba(255, 255, 255, 0.25);
  }
`

export const TaskCounter = styled.div`
  position: absolute;
  top: -1rem;
  right: 1.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.25);
`

export const TaskRewards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 0 1.3rem;

  > span {
    position: relative;
    font-size: 1.5rem;
    font-weight: 400;

    &::before {
      content: '';
      position: absolute;
      left: -1rem;
      top: 0;
      bottom: 0;
      width: 2px;
      height: 100%;
      border-radius: 2px;
    }
  }

  > span.Money {
    color: #7CB053;

    &::before {
      background: #7CB053;
    }
  }

  > span.XP {
    color: #B09653;

    &::before {
      background: #B09653;
    }
  }
`

export const FishCounterDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  gap: .5rem;

  > .Value {
    display: flex;
    align-items: center;
    gap: .8rem;

    h6 {
      font-family: 'Inter', sans-serif;
      font-size: 1.5rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text_primary };
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .6rem;
      font-family: 'Inter', sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 4px;
      color: #BBB9C7;
      background: ${({ theme }) => theme.colors.gray_tertiary };
    }
  }

  > p {
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: #BBB9C7;
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 5.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  margin-top: 2rem;
`

export const LevelWrapper = styled.div`
  width: 69rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  border-radius: 4px 0 0 4px;
  background: ${({ theme }) => theme.colors.black_secondary };
`

export const CurrentExperience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .3rem;

  > h4 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text_secondary };
  }

  > span {
    font-size: 1.3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text_tertiary };
  }
`

export const ExperienceLoaderWrapper = styled.div`
  position: relative;
  min-width: 43rem;
  max-width: 43rem;
  height: .6rem;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.02);
`

export const ExperienceLoading = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.main };
`

export const CurrentLevel = styled.div`
  width: 5.3rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 4px 0 0 4px;
  color: rgba(255, 255, 255, 0.25);
  background: #212227;
`

export const SellFish = styled.button`
  width: 29rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 0 3px 3px 0;
  transition: ${({ theme }) => theme.vars.transition };
  color: ${({ theme }) => theme.colors.text_primary };
  background: ${({ theme }) => theme.colors.main };

  &:hover {
    filter: brightness(0.5);
  }
`