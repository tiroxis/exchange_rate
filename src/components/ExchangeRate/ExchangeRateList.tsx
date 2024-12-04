import { Table } from "antd";
import { useQuery } from "@tanstack/react-query";
import { fetchExchangeRate } from "@/api/exchange_rate";

const columns = [
    {
        title: 'Код',
        dataIndex: 'CharCode',
        key: 'CharCode',
    },
    {
        title: 'Название',
        dataIndex: 'Name',
        key: 'Name',
    },
    {
        title: 'Текущая стоимость',
        dataIndex: 'Value',
        key: 'Value',
    },
    {
        title: 'Предыдущая стоимость',
        dataIndex: 'Previous',
        key: 'Previous',
    },
];

export function ExchangeRateList(){
    const { data, isFetched, isError, isFetching } = useQuery({ queryKey: ['exchange_rate'], queryFn: fetchExchangeRate })
    if(isError){
        return (<div></div>)
    }
    if(isFetching){
        return <>fetching</>
    }
    if(isFetched && data){
        return (
            <>
                <Table dataSource={Object.values(data.Valute)} columns={columns} />;
            </>
        )
    }
    return <></>
}