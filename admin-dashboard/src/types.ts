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
export interface StackedProps {
    width: string,
    height: string
};
export interface StackedCustomSeries {
    dataSource: any,
    xName: string, 
    yName: string,
    name: string,
    type: string,
    background: string
};

export interface StackedPrimaryXAxis {
    majorGridLines: Width,
    minorGridLines: Width,
    majorTickLines: Width,
    minorTickLines: Width
    interval: number,
    lineStyle: Width,
    labelIntersectAction: any,
    valueType: any
};

interface Width {
    width: number,
};

export interface StackedPrimaryYAxis {
    lineStyle: Width,
    minimum: number,
    maximum: number,
    interval: number,
    majorTickLines: Width,
    majorGridLines: Width,
    minorGridLines: Width,
    minorTickLines: Width,
    labelFormat: any

};

export interface HeaderProps {
    category: string,
    title: string
}
export interface OrdersData {
    OrderID: number,
    CustomerName: string,
    TotalAmount: number,
    OrderItems: string,
    Location: string,
    Status: string,
    StatusBg: string,
    ProductImage: any
};
export interface OrdersGrid {
    headerText: string,
    template?: any,
    textAlign: string,
    width: string,
    field?: string,
    editType?: string,
    format?: string,
};
export interface EmployeesData {
    EmployeeID: number,
    Name: string,
    Title: string,
    HireDate: string,
    Country: string,
    ReportsTo: string,
    EmployeeImage: any,
};
export interface EmployeesGrid {
    headerText: string,
    width: string,
    template?: any,
    textAlign: string,
    field?: string,
    format?: string
};
export interface CustomersGrid {
    type?: string,
    width: string,
    headerText?: string,
    template?: any,
    textAlign?: string,
    field?: string,
    format?: string,
    isPrimaryKey?: boolean
};
export interface CustomersData {
    CustomerID: number,
    CustomerName: string,
    CustomerEmail: string,
    CustomerImage: any,
    ProjectName: string,
    Status: string,
    StatusBg: string,
    Weeks: string,
    Budget: string,
    Location: string,
};
export interface ScheduleData {
    Id: number,
    Subject: string,
    Location: string,
    StartTime: string,
    EndTime: string,
    CategoryColor: string,
};
export interface KanbanGrid{
    headerText: string,
    keyField: string,
    allowToggle: boolean,
    isExpanded?: boolean,
};

export interface KanbanData {
    Id: string,
    Title: string,
    Status: string,
    Summary: string,
    Type: string,
    Priority: string,
    Tags: string,
    Estimate: number,
    Assignee: string,
    RankId: number,
    Color: string,
    ClassName: string
};

export interface ThemeColors {
    name: string,
    color: string,
};

interface Marker {
    visible: boolean,
    width: number,
    height: number
}
export interface LineCustomSeries {
    dataSource:  any,
    xName: string,
    yName: string,
    name: string,
    width: string,
    marker: Marker ,
    type: string
};
export interface LinePrimaryXAxisProps {
    valueType: any,
    labelFormat: string,
    intervalType: any,
    edgeLabelPlacement: any,
    majorGridLines: Width,
    background: string
};
export interface LinePrimaryYAxisProps{
    labelFormat: any,
    rangePadding: any,
    minimum: number
    maximum: number,
    interval: number,
    lineStyle: Width,
    majorTickLines: Width,
    minorTickLines: Width
};

export interface AreaCustomSeries {
    dataSource: any,
    xName: string,
    yName: string,
    name: string,
    opacity: string,
    type: any,
    width: string
};

export interface AreaPrimaryXAxisProps{
    valueType: any,
    labelFormat: string,
    majorGridLines: Width,
    intervalType: any,
    edgeLabelPlacement: any,
    labelStyle: {color: string}
};

export interface AreaPrimaryYAxisProps {
    labelFormat: any,
    lineStyle: Width,
    maximum: number,
    interval: number,
    majorTickLines: Width,
    minorTickLines: Width,
    labelStyle: {color: string}
};
export interface BarPrimaryXAxis {
    valueType: any,
    interval: number,
    majorGridLines: Width
};

export interface BarPrimaryYAxis {
    majorGridLines: Width,
    majorTickLines: Width,
    lineStyle: Width,
    labelStyle: {color: string}
};
interface BarMarker {
    dataLabel: {
        visible: boolean,
        position: string,
        font: { fontWeight: string, color: string }
    };
};
export interface BarCustomSeries {
    dataSource: any,
    xName: string,
    yName: string,
    name: string,
    type: any,
    marker: BarMarker
};

export interface RangeColorMapping {
    label: string,
    start: string,
    end: string,
    colors: any
};
export interface ColorMappingPrimaryXAxisProps {
    valueType: string,
    majorGridLines: Width,
    title: string
};
export interface ColorMappingPrimaryYAxisProps {
    lineStyle: Width,
    majorTickLines: Width,
    minorTickLines: Width,
    labelFormat: any,
    title: string
};
export interface FinancialPrimaryXAxisProps {
    valueType: any,
    minimum: Date,
    maximum: Date,
    crosshairTooltip: {enable: boolean},
    majorGridLines: Width,
};
export interface FinancialPrimaryYAxisProps{
    title: string,
    minimum: number,
    maximum: number, 
    interval: number,
    lineStyle: Width,
    majorTickLines: Width
};
export interface CartData {
    image: any,
    name: string,
    category: string,
    price: string,
};
export interface ChatData {
    image: any,
    message: string,
    desc: string,
    time: string,
};

export interface RecentTransactions {
    icon: JSX.Element,
    amount: string,
    title: string,
    desc: string,
    iconColor: string,
    iconBg: string,
    pcColor: string,
    percentage?: string,
};

export interface WeeklyStats {
    icon: JSX.Element,
    amount: string,
    title: string,
    desc: string,
    iconBg: string,
    pcColor: string,
};

export interface ProductsPerformance {
    image: any,
    title: string,
    desc: string,
    rating: string,
    itemSold: string,
    earningAmount: string,
};
interface Data {
    title: string,
    desc: string,
};
interface Teams {
    name: string,
    color: string,
};
interface Leaders {
    image: any
}
export interface MedicalProBranding {
    data: Data[],
    teams: Teams[],
    leaders: Leaders[],
};
export interface UserProfileData {
    icon: JSX.Element,
    title: string,
    desc: string,
    iconColor: string,
    iconBg: string,
};

export interface DropDownData {
    Id: string,
    Time: string,
};
export interface PieChartData {
    x: string,
    y: number,
    text: string,
};
export interface FinancialChartData {
    x: Date,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
};
export interface PyramidDataProps{
    x: string,
    y: number,
    text: string,
};
