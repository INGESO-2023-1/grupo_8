import psycopg2

conn = None
try:
    conn = psycopg2.connect(database="Guasac2",
                            user="postgres",
                            password="admin",
                            port="5432")
    print("Se ha conectado exitosamente a la base de datos!")
except (Exception, psycopg2.DatabaseError) as error:
    print(error)

if_exists = (
    """
    DROP TABLE IF EXISTS MSC_Users
    """,
    """
    DROP TABLE IF EXISTS HLR_Users
    """,
    """
    DROP TABLE IF EXISTS HLR_MSC
    """,
    """
    DROP TABLE IF EXISTS Messages
    """,
    """
    DROP TABLE IF EXISTS MSC
    """,
    """
    DROP TABLE IF EXISTS HLR
    """,
    """
    DROP TABLE IF EXISTS Users
    """)

commands = (
    """
    CREATE TABLE Users (
        user_id SERIAL PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        MSC_id INTEGER NOT NULL
    )
    """,
    """
    CREATE TABLE HLR (
        HLR_id SERIAL PRIMARY KEY
    )
    """,
    """
    CREATE TABLE MSC (
        MSC_id SERIAL PRIMARY KEY,
        HLR_id INTEGER NOT NULL,
        FOREIGN KEY (HLR_id) REFERENCES HLR(HLR_id) ON UPDATE CASCADE ON DELETE CASCADE
    )
    """,
    """ 
    CREATE TABLE Messages (
        message TEXT NOT NULL,
        date_time TIMESTAMP,
        receiver INTEGER NOT NULL,
        sender INTEGER NOT NULL,
        FOREIGN KEY (receiver) REFERENCES Users(user_id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (sender) REFERENCES Users(user_id) ON UPDATE CASCADE ON DELETE CASCADE
    )
    """,
    """
    CREATE TABLE HLR_MSC (
        HLR_id INTEGER NOT NULL,
        MSC_id INTEGER NOT NULL,
        FOREIGN KEY (HLR_id) REFERENCES HLR(HLR_id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (MSC_id) REFERENCES MSC(MSC_id) ON UPDATE CASCADE ON DELETE CASCADE
    )
    """,
    """
    CREATE TABLE HLR_Users (
        HLR_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (HLR_id) REFERENCES HLR(HLR_id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES Users(user_id) ON UPDATE CASCADE ON DELETE CASCADE
    )
    """,
    """
    CREATE TABLE MSC_Users (
        MSC_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES Users(user_id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (MSC_id) REFERENCES MSC(MSC_id) ON UPDATE CASCADE ON DELETE CASCADE
    )
    """)

cur = conn.cursor()

for command in if_exists:
    cur.execute(command)

for command in commands:
    cur.execute(command)
cur.close()
conn.commit()
conn.close()
