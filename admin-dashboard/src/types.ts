export interface LinkT {
    title: string,
    links: Links[] 
};
interface Links {
    name: string,
    icon: any
};

export interface EarningData {
    icon: JSX.Element,
    amount: string,
    percentage: string,
    title: string,
    iconColor: string,
    iconBg: string,
    pcColor: string
};
export interface SparkLineAreaData {
    x: number,
    xval?: string,
    yval: number
};
export interface EcomPieChartData {
    x: string,
    y: number,
    text: string
};
export interface ButtonProps {
    color: string,
    bgColor: string,
    text: string,
    borderRadius: string,
    size: string
};

export interface SparkLineProps {
    currentColor: string,
    id: string,
    type: any,
    height: string,
    width: string,
    data: SparkLineAreaData[],
    color: string
};
