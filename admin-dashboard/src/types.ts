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
