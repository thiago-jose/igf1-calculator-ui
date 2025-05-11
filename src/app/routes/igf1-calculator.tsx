import { useEffect, useState } from 'react';

export default function SDSIGFCalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [igfNgMl, setIgfNgMl] = useState('');
  const [igfNmolL, setIgfNmolL] = useState('');
  const [result, setResult] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');

  useEffect(() => {
    console.log('gender has been updated:', gender);
    clearResult();
  }, [gender]);

  const clearResult = () => {
    setResult('');
  };

  const handleCalculate = () => {
    // Em uma aplicação real, aqui estaria a lógica de cálculo
    if (gender === 'male') {
      const result =
        1 + parseFloat(age) * parseFloat(igfNgMl) * parseFloat(igfNmolL);
      setResult(result.toString());
    } else {
      const result =
        2 + parseFloat(age) * parseFloat(igfNgMl) * parseFloat(igfNmolL);
      setResult(result.toString());
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4">
      <div className="mb-6">
        <h1 className="text-xl font-medium text-teal-600 md:text-2xl">
          Calculadora SDS IGF-1
        </h1>
      </div>

      <div className="mb-4 rounded-md bg-gray-50 p-4 md:p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Coluna Esquerda - Seleção de Sexo */}
          <div>
            <label
              htmlFor="gender"
              className="mb-4 block text-lg font-medium text-gray-700"
            >
              Sexo
            </label>
            <div className="flex items-center space-x-6">
              <div
                className="flex cursor-pointer items-center"
                onClick={() => setGender('male')}
                onKeyDown={(e) => e.key === 'Enter' && setGender('male')}
                role="button"
                tabIndex={0}
              >
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                  className="hidden"
                />
                <div
                  className={`flex size-6 items-center justify-center rounded-full border-2 ${gender === 'male' ? 'border-teal-500 bg-teal-500' : 'border-teal-500'}`}
                >
                  {gender === 'male' && (
                    <div className="size-2 rounded-full bg-white"></div>
                  )}
                </div>
                <label
                  htmlFor="male"
                  className="ml-2 cursor-pointer text-gray-700"
                >
                  Homem
                </label>
              </div>
              <div
                className="flex cursor-pointer items-center"
                onClick={() => setGender('female')}
                onKeyDown={(e) => e.key === 'Enter' && setGender('female')}
                role="button"
                tabIndex={0}
              >
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                  className="hidden"
                />
                <div
                  className={`flex size-6 items-center justify-center rounded-full border-2 ${gender === 'female' ? 'border-teal-500 bg-teal-500' : 'border-teal-500'}`}
                >
                  {gender === 'female' && (
                    <div className="size-2 rounded-full bg-white"></div>
                  )}
                </div>
                <label
                  htmlFor="female"
                  className="ml-2 cursor-pointer text-gray-700"
                >
                  Mulher
                </label>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Idade */}
          <div>
            <label
              htmlFor="age"
              className="mb-4 block text-lg font-medium text-gray-700"
            >
              Idade
            </label>
            <input
              id="age"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* IGF (ng/mL) */}
          <div>
            <label
              htmlFor="igfNgMl"
              className="mb-4 block text-lg font-medium text-gray-700"
            >
              IGF (ng/mL)
            </label>
            <div className="flex">
              <input
                id="igfNgMl"
                type="text"
                value={igfNgMl}
                onChange={(e) => setIgfNgMl(e.target.value)}
                className="grow rounded-l-md border border-gray-300 p-2"
              />
              <div className="flex items-center justify-center rounded-r-md bg-gray-200 p-2 text-gray-700">
                ng/mL
              </div>
            </div>
          </div>

          {/* IGF (nmol/L) */}
          <div>
            <label
              htmlFor="igfNmolL"
              className="mb-4 block text-lg font-medium text-gray-700"
            >
              IGF (nmol/L)
            </label>
            <div className="flex">
              <input
                id="igfNmolL"
                type="text"
                value={igfNmolL}
                onChange={(e) => setIgfNmolL(e.target.value)}
                className="grow rounded-l-md border border-gray-300 p-2"
              />
              <div className="flex items-center justify-center rounded-r-md bg-gray-200 p-2 text-gray-700">
                nmol/L
              </div>
            </div>
          </div>
        </div>

        {/* Date and Time */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Start Date and Time */}
          <div>
            <label
              htmlFor="startDateTime"
              className="mb-4 block text-lg font-medium text-gray-700"
            >
              Data e hora da última aplicação
            </label>
            <input
              id="startDateTime"
              type="datetime-local"
              value={startDateTime}
              onChange={(e) => setStartDateTime(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>

          {/* End Date and Time */}
          <div>
            <label
              htmlFor="endDateTime"
              className="mb-4 block text-lg font-medium text-gray-700"
            >
              Data e hora da amostragem
            </label>
            <input
              id="endDateTime"
              type="datetime-local"
              value={endDateTime}
              onChange={(e) => setEndDateTime(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
        </div>
      </div>

      {/* Divisor Horizontal */}
      <div className="my-6 border-t border-teal-500"></div>

      {/* Seção de Resultados */}
      <div className="rounded-md bg-blue-50 p-4 md:p-6">
        <h2 className="mb-6 text-center text-xl font-medium text-teal-600 md:text-2xl">
          Resultado
        </h2>
        <div className="flex items-center justify-center">
          <input
            type="text"
            value={result}
            readOnly
            className="w-32 rounded-l-md border border-gray-300 bg-white p-2 text-center md:w-40"
          />
          <button
            onClick={handleCalculate}
            className="rounded-r-md bg-teal-500 px-4 py-2 text-white transition-colors hover:bg-teal-600"
          >
            SDS IGF
          </button>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="text"
            value={result}
            readOnly
            className="w-32 rounded-l-md border border-gray-300 bg-white p-2 text-center md:w-40"
          />
          <button
            onClick={handleCalculate}
            className="rounded-r-md bg-teal-500 px-4 py-2 text-white transition-colors hover:bg-teal-600"
          >
            SDS IGF
          </button>
        </div>
      </div>
    </div>
  );
}
