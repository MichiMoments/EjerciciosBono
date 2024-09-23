import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialCharacters, setIncludeSpecialCharacters] = useState(true);

    const generatePassword = () => {
        let charset = '';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeNumbers) charset += '0123456789';
        if (includeSpecialCharacters) charset += '!@#$%^&*()_+<>?';

        if (charset === '') {
            setPassword('');
            return;
        }

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }
        setPassword(generatedPassword);
    };  

    useEffect(() => {
        generatePassword();
    }, [length]);

    return (
        <div>
            <h2>Password Generator</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Generated Password</Form.Label>
                    <Form.Control type="text" readOnly value={password} placeholder="Your password will appear here" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password Length: {length}</Form.Label>
                    <Form.Range 
                        min="4" 
                        max="20" 
                        value={length} 
                        onChange={(e) => setLength(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check 
                        type="checkbox" 
                        label="Include Lowercase" 
                        checked={includeLowercase} 
                        onChange={(e) => setIncludeLowercase(e.target.checked)} 
                    />
                    <Form.Check 
                        type="checkbox" 
                        label="Include Uppercase" 
                        checked={includeUppercase} 
                        onChange={(e) => setIncludeUppercase(e.target.checked)} 
                    />
                    <Form.Check 
                        type="checkbox" 
                        label="Include Numbers" 
                        checked={includeNumbers} 
                        onChange={(e) => setIncludeNumbers(e.target.checked)} 
                    />
                    <Form.Check 
                        type="checkbox" 
                        label="Include Special Characters" 
                        checked={includeSpecialCharacters} 
                        onChange={(e) => setIncludeSpecialCharacters(e.target.checked)} 
                    />
                </Form.Group>
                <Button variant="primary" onClick={() => navigator.clipboard.writeText(password)}>
                    Copy Password
                </Button>
            </Form>
        </div>
    );
}

export default PasswordGenerator;