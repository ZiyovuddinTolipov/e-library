import React, { useState, useEffect } from 'react';

function App() {
    const [token, setToken] = useState(null);
    const [data, setData] = useState(null);

    // Foydalanuvchi to'kensiz bo'lsa, avval login sahifasiga yo'naltiramiz
    // useEffect(() => {
    //     if (!token) {
    //         window.location.href = '/login'; // Yo'naltirish yo'lini o'zgartiring
    //     }
    // }, [token]);

    // Foydalanuvchi to'keni olish uchun POST so'rovni yuborish
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/your-endpoint', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    // Yuboriladigan ma'lumotlarni JSON ko'rinishida yuboring
                    body: JSON.stringify({
                        key1: 'value1',
                        key2: 'value2',
                        // Boshqa ma'lumotlar
                    }),
                });

                if (response.ok) {
                    const result = await response.json();
                    setData(result);
                } else {
                    // Xatolik sodir bo'lganida ishlab chiqaring
                    console.error('Serverdan xatolik kelib chiqdi');
                }
            } catch (error) {
                console.error('Sorovni bajarishda xatolik: ', error);
      }
        };

        // Foydalanuvchi to'keni borligini tekshirib, so'rovni yuborish
        if (token) {
            fetchData();
        }
    }, [token]);

    return (
        <div>
            {data ? (
                <div>
                    <h1>Ma'lumot olishdi!</h1>
                    {/* Olingan ma'lumotlarni ko'rsatish */}
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            ) : (
                <h1>Ma'lumot olish...</h1>
            )}
        </div>
    );
}

export default App;
