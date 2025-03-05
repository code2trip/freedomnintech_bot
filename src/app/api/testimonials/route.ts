import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Утилитарная функция для чтения JSON файлов
const readJsonFile = async (fileName: string) => {
    try {
        const filePath = path.join(process.cwd(), 'public', 'data', fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        // Проверяем, что error является экземпляром Error перед доступом к message
        if (error instanceof Error) {
            console.error(`Ошибка при чтении файла ${fileName}: ${error.message}`);
            throw new Error(`Ошибка при чтении файла ${fileName}: ${error.message}`);
        } else {
            console.error(`Ошибка при чтении файла ${fileName}: Неизвестная ошибка`);
            throw new Error(`Ошибка при чтении файла ${fileName}: Неизвестная ошибка`);
        }
    }
};

export async function GET(
    request: Request,
    { params }: { params: { filename?: string } }
) {
    try {
        // Проверяем, что параметр filename существует и является строкой
        if (!params || typeof params.filename !== 'string') {
            return NextResponse.json(
                { error: "Некорректный запрос: отсутствует параметр filename" },
                { status: 400 }
            );
        }

        const filename = params.filename || 'cases.json';
        const data = await readJsonFile(`${filename}.json`);
        
        return NextResponse.json(data);
    } catch (error) {
        // Проверяем, что error является экземпляром Error перед доступом к message
        if (error instanceof Error) {
            console.error(`Ошибка на сервере: ${error.message}`);
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        } else {
            console.error(`Произошла неизвестная ошибка`);
            return NextResponse.json(
                { error: "Произошла неизвестная ошибка" },
                { status: 500 }
            );
        }
    }
} 