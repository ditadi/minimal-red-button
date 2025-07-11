
import { type ButtonPage } from '../schema';

export async function getButtonPage(): Promise<ButtonPage> {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Red Button Page</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        
        .red-button {
            width: 200px;
            height: 60px;
            background-color: #ff0000;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            outline: none;
            color: white;
            font-size: 16px;
            font-weight: bold;
            transition: background-color 0.2s ease;
        }
        
        .red-button:hover {
            background-color: #cc0000;
        }
        
        .red-button:active {
            background-color: #990000;
        }
    </style>
</head>
<body>
    <button class="red-button" onclick="alert('Button clicked!')">Click Me!</button>
</body>
</html>`;

    return {
        html,
        title: 'Red Button Page'
    };
}
