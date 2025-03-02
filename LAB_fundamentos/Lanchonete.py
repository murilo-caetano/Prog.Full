Codigo = int(input("Digite o código do produto:"))
Quantidade = int(input("Digite a quantidade do produto:"))
if Codigo == 1:
    print(f"Total: R$ {Quantidade*6:.2f}")
if Codigo == 2:
    print(f"Total: R$ {Quantidade*6.5:.2f}")
if Codigo == 3:
    print(f"Total: R$ {Quantidade*5:.2f}")
if Codigo == 4:
    print(f"Total: R$ {Quantidade*3:.2f}")
if Codigo == 5:
    print(f"Total: R$ {Quantidade*2:.2f}")