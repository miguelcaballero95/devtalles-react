import { useEffect, useState } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
  gray: 'bg-gray-500'
}

type TrafficLightColors = keyof typeof colors;

export const useTrafficLight = () => {

  const [light, setLight] = useState<TrafficLightColors>('red');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {

    if (countdown === 0) return;
    const intervalId = setInterval(() => {
      setCountdown(prev => prev - 1)
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [countdown]);

  useEffect(() => {

    if (countdown > 0) return;

    if (light === 'red') {
      setLight('green');
    }
    if (light === 'yellow') {
      setLight('red');
    }
    if (light === 'green') {
      setLight('yellow');
    }
    setCountdown(5);
    return;

  }, [countdown, light]);

  return {
    countdown,
    percentage: (countdown / 5) * 100,
    redLight: light === 'red' ? colors.red : colors.gray,
    yellowLight: light === 'yellow' ? colors.yellow : colors.gray,
    greenLight: light === 'green' ? colors.green : colors.gray,
  };
}