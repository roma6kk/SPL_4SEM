import React, { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import History from './components/History';
import ThemeToggle from './components/ThemeToggle';
import './styles/themes.css';
import './styles/Calculator.css';

const App: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<string>('');
  const [operation, setOperation] = useState<string | null>(null);
  const [overwrite, setOverwrite] = useState<boolean>(true);
  const [history, setHistory] = useState<string[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const clear = () => {
    setCurrentValue('0');
    setPreviousValue('');
    setOperation(null);
    setOverwrite(true);
  };

  const deleteLastChar = () => {
    if (currentValue.length === 1 || (currentValue.length === 2 && currentValue.startsWith('-'))) {
      setCurrentValue('0');
      setOverwrite(true);
    } else {
      setCurrentValue(currentValue.slice(0, -1));
    }
  };

  const addDigit = (digit: string) => {
    if (currentValue === '0' || overwrite) {
      setCurrentValue(digit);
      setOverwrite(false);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
  };

  const addDecimal = () => {
    if (overwrite) {
      setCurrentValue('0.');
      setOverwrite(false);
      return;
    }

    if (!currentValue.includes('.')) {
      setCurrentValue(`${currentValue}.`);
    }
  };

  const setOperator = (operator: string) => {
    if (previousValue && operation && !overwrite) {
      const result = calculate();
      setCurrentValue(result);
      setPreviousValue(result);
    } else {
      setPreviousValue(currentValue);
    }
    setOperation(operator);
    setOverwrite(true);
  };

  const toggleSign = () => {
    if (currentValue === '0') return;
    setCurrentValue(currentValue.startsWith('-') ? currentValue.slice(1) : `-${currentValue}`);
  };

  const calculate = (): string => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    if (isNaN(prev)) return currentValue;

    let result: number;
    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        if (current === 0) {
          return 'Ошибка: Деление на ноль';
        }
        result = prev / current;
        break;
      default:
        return currentValue;
    }

    return result.toString();
  };

  const equals = () => {
    if (!operation || overwrite) return;

    const result = calculate();
    const calculation = `${previousValue} ${operation} ${currentValue} = ${result}`;
    
    setHistory([...history.slice(-4), calculation]);
    setCurrentValue(result);
    setPreviousValue('');
    setOperation(null);
    setOverwrite(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key >= '0' && e.key <= '9') {
      addDigit(e.key);
    } else if (e.key === '.') {
      addDecimal();
    } else if (e.key === '+') {
      setOperator('+');
    } else if (e.key === '-') {
      setOperator('-');
    } else if (e.key === '*') {
      setOperator('*');
    } else if (e.key === '/') {
      setOperator('/');
    } else if (e.key === 'Enter' || e.key === '=') {
      equals();
    } else if (e.key === 'Escape') {
      clear();
    } else if (e.key === 'Backspace') {
      deleteLastChar();
    }
  };

  return (
    <div className={`app ${theme}`} onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="calculator">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Display value={currentValue} expression={previousValue + ' ' + (operation || '')} />
        <History history={history} />
        <div className="buttons">
          <Button onClick={clear} className="span-2">C</Button>
          <Button onClick={deleteLastChar}>⌫</Button>
          <Button onClick={() => setOperator('/')}>/</Button>
          
          <Button onClick={() => addDigit('7')}>7</Button>
          <Button onClick={() => addDigit('8')}>8</Button>
          <Button onClick={() => addDigit('9')}>9</Button>
          <Button onClick={() => setOperator('*')}>*</Button>
          
          <Button onClick={() => addDigit('4')}>4</Button>
          <Button onClick={() => addDigit('5')}>5</Button>
          <Button onClick={() => addDigit('6')}>6</Button>
          <Button onClick={() => setOperator('-')}>-</Button>
          
          <Button onClick={() => addDigit('1')}>1</Button>
          <Button onClick={() => addDigit('2')}>2</Button>
          <Button onClick={() => addDigit('3')}>3</Button>
          <Button onClick={() => setOperator('+')}>+</Button>
          
          <Button onClick={toggleSign}>+/-</Button>
          <Button onClick={() => addDigit('0')}>0</Button>
          <Button onClick={addDecimal}>.</Button>
          <Button onClick={equals}>=</Button>
        </div>
      </div>
    </div>
  );
};

export default App;