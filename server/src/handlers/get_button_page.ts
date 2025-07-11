
import { type ButtonPage } from '../schema';

export async function getButtonPage(): Promise<ButtonPage> {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is returning HTML content for a page with a single red button.
    
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
        }
        
        .red-button {
            width: 100px;
            height: 50px;
            background-color: #ff0000;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            outline: none;
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
    <button class="red-button" onclick=""></button>
</body>
</html>`;

    return Promise.resolve({
        html,
        title: 'Red Button Page'
    } as ButtonPage);
}
