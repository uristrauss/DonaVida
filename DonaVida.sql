USE [master]
GO
/****** Object:  Database [DonaVida]    Script Date: 04/06/2023 23:31:13 ******/
CREATE DATABASE [DonaVida]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DonaVida', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\DonaVida.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DonaVida_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\DonaVida_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [DonaVida] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DonaVida].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DonaVida] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DonaVida] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DonaVida] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DonaVida] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DonaVida] SET ARITHABORT OFF 
GO
ALTER DATABASE [DonaVida] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DonaVida] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DonaVida] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DonaVida] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DonaVida] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DonaVida] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DonaVida] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DonaVida] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DonaVida] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DonaVida] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DonaVida] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DonaVida] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DonaVida] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DonaVida] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DonaVida] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DonaVida] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DonaVida] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DonaVida] SET RECOVERY FULL 
GO
ALTER DATABASE [DonaVida] SET  MULTI_USER 
GO
ALTER DATABASE [DonaVida] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DonaVida] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DonaVida] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DonaVida] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DonaVida] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DonaVida] SET QUERY_STORE = OFF
GO
USE [DonaVida]
GO
/****** Object:  Table [dbo].[Alertas]    Script Date: 04/06/2023 23:31:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Alertas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Fecha] [date] NOT NULL,
 CONSTRAINT [PK_Alertas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Beneficiario]    Script Date: 04/06/2023 23:31:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Beneficiario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TipoSangre] [varchar](50) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Apellido] [varchar](50) NOT NULL,
	[CantDonacionesNecesitadas] [int] NOT NULL,
	[Compatibilidad] [varchar](50) NOT NULL,
	[Historia] [varchar](500) NOT NULL,
 CONSTRAINT [PK_Beneficiario] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Calendario]    Script Date: 04/06/2023 23:31:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Calendario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FechaDonacion] [date] NOT NULL,
	[FkCentro] [int] NOT NULL,
	[FkBeneficiario] [int] NOT NULL,
 CONSTRAINT [PK_Calendario] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CentroDonacion]    Script Date: 04/06/2023 23:31:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CentroDonacion](
	[IdCentroDonacion] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Direccion] [varchar](50) NOT NULL,
	[Apertura] [time](7) NOT NULL,
	[Cierre] [time](7) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Contraseña] [varchar](50) NOT NULL,
	[FkBeneficiarios] [int] NOT NULL,
 CONSTRAINT [PK_CentroDonacion] PRIMARY KEY CLUSTERED 
(
	[IdCentroDonacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Donacion]    Script Date: 04/06/2023 23:31:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Donacion](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FkDonante] [int] NOT NULL,
	[FkCentro] [int] NOT NULL,
	[FkBeneficiario] [int] NOT NULL,
	[FechaDonacion] [date] NOT NULL,
 CONSTRAINT [PK_Donacion] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Donante]    Script Date: 04/06/2023 23:31:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Donante](
	[IdDonante] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Apellido] [varchar](50) NOT NULL,
	[FechaDeNacimiento] [date] NOT NULL,
	[DNI] [int] NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Contraseña] [varchar](50) NOT NULL,
	[Peso] [int] NOT NULL,
	[BuenaSalud] [bit] NOT NULL,
	[Embarazo] [bit] NOT NULL,
	[Sexo] [varchar](50) NOT NULL,
	[FechaDonacion] [date] NOT NULL,
	[Medicamentos] [bit] NOT NULL,
	[HepatitisBC] [bit] NOT NULL,
	[Parto] [date] NOT NULL,
	[Operacion] [date] NOT NULL,
	[Antitetanica] [date] NOT NULL,
	[UltimoTatuaje] [date] NOT NULL,
	[UltimoHierro] [date] NOT NULL,
	[LactanciaMaterna] [bit] NOT NULL,
	[FinMononucleosis] [date] NOT NULL,
	[Antipaludicos] [date] NOT NULL,
	[ITS] [bit] NOT NULL,
	[Puntos] [int] NOT NULL,
	[TipoSangre] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Donante] PRIMARY KEY CLUSTERED 
(
	[IdDonante] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DonanteXRecompensa]    Script Date: 04/06/2023 23:31:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DonanteXRecompensa](
	[IdDonante] [int] NOT NULL,
	[IdRecompensa] [int] NOT NULL,
 CONSTRAINT [PK_DonanteXRecompensa] PRIMARY KEY CLUSTERED 
(
	[IdDonante] ASC,
	[IdRecompensa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Recompensas]    Script Date: 04/06/2023 23:31:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Recompensas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Local] [varchar](50) NOT NULL,
	[Ubicación] [varchar](50) NOT NULL,
	[Descuento] [varchar](50) NOT NULL,
	[Valor] [int] NOT NULL,
 CONSTRAINT [PK_Recompensas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Alertas] ON 

INSERT [dbo].[Alertas] ([Id], [Fecha]) VALUES (1, CAST(N'2004-03-12' AS Date))
INSERT [dbo].[Alertas] ([Id], [Fecha]) VALUES (2, CAST(N'2002-02-14' AS Date))
INSERT [dbo].[Alertas] ([Id], [Fecha]) VALUES (3, CAST(N'2019-05-24' AS Date))
SET IDENTITY_INSERT [dbo].[Alertas] OFF
GO
SET IDENTITY_INSERT [dbo].[Beneficiario] ON 

INSERT [dbo].[Beneficiario] ([Id], [TipoSangre], [Nombre], [Apellido], [CantDonacionesNecesitadas], [Compatibilidad], [Historia]) VALUES (1, N'A+', N'Raul', N'Loco', 3, N'A-', N'Muy lindo')
INSERT [dbo].[Beneficiario] ([Id], [TipoSangre], [Nombre], [Apellido], [CantDonacionesNecesitadas], [Compatibilidad], [Historia]) VALUES (2, N'B-', N'Pedro', N'Corras', 1, N'B+', N'lol')
INSERT [dbo].[Beneficiario] ([Id], [TipoSangre], [Nombre], [Apellido], [CantDonacionesNecesitadas], [Compatibilidad], [Historia]) VALUES (3, N'O', N'POLO', N'Apello', 5, N'O+', N'MOUY')
SET IDENTITY_INSERT [dbo].[Beneficiario] OFF
GO
SET IDENTITY_INSERT [dbo].[Calendario] ON 

INSERT [dbo].[Calendario] ([Id], [FechaDonacion], [FkCentro], [FkBeneficiario]) VALUES (2, CAST(N'2005-03-12' AS Date), 1, 1)
INSERT [dbo].[Calendario] ([Id], [FechaDonacion], [FkCentro], [FkBeneficiario]) VALUES (3, CAST(N'2019-02-09' AS Date), 1, 2)
INSERT [dbo].[Calendario] ([Id], [FechaDonacion], [FkCentro], [FkBeneficiario]) VALUES (4, CAST(N'2010-03-20' AS Date), 2, 3)
SET IDENTITY_INSERT [dbo].[Calendario] OFF
GO
SET IDENTITY_INSERT [dbo].[CentroDonacion] ON 

INSERT [dbo].[CentroDonacion] ([IdCentroDonacion], [Nombre], [Direccion], [Apertura], [Cierre], [Email], [Contraseña], [FkBeneficiarios]) VALUES (1, N'Sangre', N'Gimenez 2033', CAST(N'09:00:00' AS Time), CAST(N'08:00:00' AS Time), N'asdadas', N'adcsc', 1)
INSERT [dbo].[CentroDonacion] ([IdCentroDonacion], [Nombre], [Direccion], [Apertura], [Cierre], [Email], [Contraseña], [FkBeneficiarios]) VALUES (2, N'csascsa', N'ccdsdc', CAST(N'01:00:00' AS Time), CAST(N'02:00:00' AS Time), N'acxascx', N'cdcsdc', 2)
INSERT [dbo].[CentroDonacion] ([IdCentroDonacion], [Nombre], [Direccion], [Apertura], [Cierre], [Email], [Contraseña], [FkBeneficiarios]) VALUES (3, N'lsalxlas', N'fvewcs', CAST(N'04:00:00' AS Time), CAST(N'05:00:00' AS Time), N'csdcs', N'sxaxsa', 3)
SET IDENTITY_INSERT [dbo].[CentroDonacion] OFF
GO
SET IDENTITY_INSERT [dbo].[Donacion] ON 

INSERT [dbo].[Donacion] ([Id], [FkDonante], [FkCentro], [FkBeneficiario], [FechaDonacion]) VALUES (4, 2, 2, 2, CAST(N'2003-08-20' AS Date))
INSERT [dbo].[Donacion] ([Id], [FkDonante], [FkCentro], [FkBeneficiario], [FechaDonacion]) VALUES (5, 2, 2, 2, CAST(N'2004-02-03' AS Date))
SET IDENTITY_INSERT [dbo].[Donacion] OFF
GO
SET IDENTITY_INSERT [dbo].[Donante] ON 

INSERT [dbo].[Donante] ([IdDonante], [Nombre], [Apellido], [FechaDeNacimiento], [DNI], [Email], [Contraseña], [Peso], [BuenaSalud], [Embarazo], [Sexo], [FechaDonacion], [Medicamentos], [HepatitisBC], [Parto], [Operacion], [Antitetanica], [UltimoTatuaje], [UltimoHierro], [LactanciaMaterna], [FinMononucleosis], [Antipaludicos], [ITS], [Puntos], [TipoSangre]) VALUES (2, N'Pedro', N'Pascal', CAST(N'2004-04-20' AS Date), 47285944, N'odwqdq', N'adcsax', 87, 1, 1, N'M', CAST(N'2006-04-20' AS Date), 1, 1, CAST(N'2007-08-20' AS Date), CAST(N'2009-03-09' AS Date), CAST(N'2003-02-09' AS Date), CAST(N'2005-02-23' AS Date), CAST(N'2005-03-23' AS Date), 0, CAST(N'2004-02-20' AS Date), CAST(N'2004-06-03' AS Date), 0, 0, N'A+')
SET IDENTITY_INSERT [dbo].[Donante] OFF
GO
SET IDENTITY_INSERT [dbo].[Recompensas] ON 

INSERT [dbo].[Recompensas] ([Id], [Local], [Ubicación], [Descuento], [Valor]) VALUES (1, N'starbucks', N'lasdas', N'2', 2)
INSERT [dbo].[Recompensas] ([Id], [Local], [Ubicación], [Descuento], [Valor]) VALUES (2, N'adsaxa', N'cdscds', N'3', 4)
INSERT [dbo].[Recompensas] ([Id], [Local], [Ubicación], [Descuento], [Valor]) VALUES (3, N'saxcas', N'fcdsc', N'3', 2)
SET IDENTITY_INSERT [dbo].[Recompensas] OFF
GO
ALTER TABLE [dbo].[Calendario]  WITH CHECK ADD  CONSTRAINT [FK_Calendario_CentroDonacion] FOREIGN KEY([FkCentro])
REFERENCES [dbo].[CentroDonacion] ([IdCentroDonacion])
GO
ALTER TABLE [dbo].[Calendario] CHECK CONSTRAINT [FK_Calendario_CentroDonacion]
GO
ALTER TABLE [dbo].[Donacion]  WITH CHECK ADD  CONSTRAINT [FK_Donacion_Beneficiario] FOREIGN KEY([FkBeneficiario])
REFERENCES [dbo].[Beneficiario] ([Id])
GO
ALTER TABLE [dbo].[Donacion] CHECK CONSTRAINT [FK_Donacion_Beneficiario]
GO
ALTER TABLE [dbo].[Donacion]  WITH CHECK ADD  CONSTRAINT [FK_Donacion_CentroDonacion] FOREIGN KEY([FkCentro])
REFERENCES [dbo].[CentroDonacion] ([IdCentroDonacion])
GO
ALTER TABLE [dbo].[Donacion] CHECK CONSTRAINT [FK_Donacion_CentroDonacion]
GO
ALTER TABLE [dbo].[Donacion]  WITH CHECK ADD  CONSTRAINT [FK_Donacion_Donante] FOREIGN KEY([FkDonante])
REFERENCES [dbo].[Donante] ([IdDonante])
GO
ALTER TABLE [dbo].[Donacion] CHECK CONSTRAINT [FK_Donacion_Donante]
GO
ALTER TABLE [dbo].[Donante]  WITH CHECK ADD  CONSTRAINT [FK_Donante_Alertas] FOREIGN KEY([IdDonante])
REFERENCES [dbo].[Alertas] ([Id])
GO
ALTER TABLE [dbo].[Donante] CHECK CONSTRAINT [FK_Donante_Alertas]
GO
ALTER TABLE [dbo].[Donante]  WITH CHECK ADD  CONSTRAINT [FK_Donante_Calendario] FOREIGN KEY([IdDonante])
REFERENCES [dbo].[Calendario] ([Id])
GO
ALTER TABLE [dbo].[Donante] CHECK CONSTRAINT [FK_Donante_Calendario]
GO
ALTER TABLE [dbo].[DonanteXRecompensa]  WITH CHECK ADD  CONSTRAINT [FK_DonanteXRecompensa_Donante] FOREIGN KEY([IdDonante])
REFERENCES [dbo].[Donante] ([IdDonante])
GO
ALTER TABLE [dbo].[DonanteXRecompensa] CHECK CONSTRAINT [FK_DonanteXRecompensa_Donante]
GO
ALTER TABLE [dbo].[DonanteXRecompensa]  WITH CHECK ADD  CONSTRAINT [FK_DonanteXRecompensa_Recompensas] FOREIGN KEY([IdRecompensa])
REFERENCES [dbo].[Recompensas] ([Id])
GO
ALTER TABLE [dbo].[DonanteXRecompensa] CHECK CONSTRAINT [FK_DonanteXRecompensa_Recompensas]
GO
USE [master]
GO
ALTER DATABASE [DonaVida] SET  READ_WRITE 
GO
