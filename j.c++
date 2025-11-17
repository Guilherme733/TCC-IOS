#include <unistd.h>

#define MAX 10

int psize[MAX], alloc[MAX], n;

void print(char *s) { write(1, s, sizeof(s)); }

int readint() {
    char b[16]; int v = 0;
    int r = read(0, b, 16);
    for (int i = 0; i < r; i++)
        if (b[i] >= '0' && b[i] <= '9')
            v = v * 10 + (b[i] - '0');
    return v;
}

void show() {
    char msg[] = "Partition: ";
    write(1, msg, sizeof(msg));
    for (int i = 0; i < n; i++) {
        char c = alloc[i] ? 'A' : 'F';
        write(1, &c, 1);
        write(1, " ", 1);
    }
    write(1, "\n", 1);
}

int main() {
    write(1, "Partitions: ", 12);
    n = readint();

    for (int i = 0; i < n; i++) {
        write(1, "Size: ", 6);
        psize[i] = readint();
        alloc[i] = 0;
    }

    while (1) {
        write(1, "\n1.Alloc  2.Free  3.Show  4.Exit\nChoice: ", 40);
        int ch = readint();

        if (ch == 1) {
            write(1, "Req: ", 5);
            int r = readint();
            int f = 0;
            for (int i = 0; i < n; i++)
                if (!alloc[i] && psize[i] >= r) {
                    alloc[i] = 1; f = 1; break;
                }
            write(1, f ? "Allocated\n" : "Fail\n", f ? 10 : 5);

        } else if (ch == 2) {
            write(1, "Index: ", 7);
            int x = readint();
            if (x >= 0 && x < n) alloc[x] = 0;
            write(1, "Freed\n", 6);

        } else if (ch == 3) {
            show();

        } else if (ch == 4) {
            return 0;
        }
    }
}
