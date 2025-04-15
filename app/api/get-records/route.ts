import axios from 'axios';
import moment from 'moment';
import { NextResponse } from 'next/server';

export async function GET()
{
    try {
        // Fetch records from NocoDB
        const options = {
            method: 'GET',
            url: 'https://crm.lobon.org/api/v2/tables/mjmif4s4w6tfsa4/records',
            headers: {
                'xc-token': process.env.NOCODB_XC_TOKEN, // Securely access the token
                'Content-Type': 'application/json',
            },
            params: {
                offset: 0,
                limit: 1000,
                sort: '-CreatedAt',
            },
        };

        const response = await axios.request(options);

        const data = response.data.list.map((item: any) => {
            return {
                Id: item.Id,
                Name: item.Name,
                District: item.District,
            };
        });

        // Filter records from the last 24 hours
        const oneDayAgo = moment().subtract(24, 'hours');
        const recentEntries = response.data.list.filter((item: any) =>
            moment(item.CreatedAt).isAfter(oneDayAgo)
        ).map((item: any) => {
            return {
                Id: item.Id,
                Name: item.Name,
                District: item.District,
            };
        });

        // Return the response with the filtered data
        return NextResponse.json({
            ...response.data,
            last24Hours: recentEntries,
            list: data,
        });
    } catch (error: any) {
        console.error(
            'Error fetching from NocoDB:',
            error?.response ? error?.response?.data : error?.message
        );
        return NextResponse.json(
            {
                error: 'Failed to fetch data from NocoDB',
                details: error?.response?.data?.message || error?.message,
            },
            { status: 500 }
        );
    }
}