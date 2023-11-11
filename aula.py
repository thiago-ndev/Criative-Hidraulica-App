import site
import time


def converter_moeda(qtd: float, cot: float):
    valor = qtd * cot
    return valor


e = float(input("digite a quantia em euros: "))
c = float(input("digite a cotação: "))

print("o valor em reais é: ", converter_moeda(e, c))


def fib(n: int):
    if n < 2:
        return n
    else:
        chamada = 0
        chamada += 1
        print(f'chamada: {chamada}')
        return fib(n - 1) + fib(n - 2)


X = fib(4)

print(X)


def adicao(a, b):
    return a + b


def media(a, b):
    return adicao(a, b) / 2


nota = media(10, 20)
print(nota)
#
#
inicio = time.time()


def fat(n):
    lista = []
    if n < 2:
        return n
    else:
        for numer in range(n - 1, 0, -1):
            lista.append(numer)
        v = 0
        t = len(lista)
        while t != 1:
            if v == 0:
                x = n * t
                v = x
                t -= 1
                if n == 3:
                    return v
            if v > 0:
                result = v * t
                v = result
                t -= 1
        return v


# def fat(n):
#     if n == 0 or n ==1:
#         return 1
#     else:
#         return n * fat(n-1)

print(fat(900))
fim = time.time()  # calcula o tempo de execução

tempo = fim - inicio
print(f"tempo de execução: {tempo:.10f} segundos")
