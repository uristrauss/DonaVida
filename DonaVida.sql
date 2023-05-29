USE [master]
GO
/****** Object:  Database [DonaVida]    Script Date: 15/5/2023 11:50:47 ******/
CREATE DATABASE [DonaVida]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DonaVida', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DonaVida.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DonaVida_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DonaVida_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
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
EXEC sys.sp_db_vardecimal_storage_format N'DonaVida', N'ON'
GO
ALTER DATABASE [DonaVida] SET QUERY_STORE = OFF
GO
USE [DonaVida]
GO
/****** Object:  User [alumno]    Script Date: 15/5/2023 11:50:48 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Alertas]    Script Date: 15/5/2023 11:50:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Alertas](
	[Id] [int] NOT NULL,
	[Fecha] [date] NOT NULL,
 CONSTRAINT [PK_Alertas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Beneficiario]    Script Date: 15/5/2023 11:50:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Beneficiario](
	[Id] [int] NOT NULL,
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
/****** Object:  Table [dbo].[Calendario]    Script Date: 15/5/2023 11:50:48 ******/
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
/****** Object:  Table [dbo].[CentroDonacion]    Script Date: 15/5/2023 11:50:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CentroDonacion](
	[IdCentroDonacion] [int] NOT NULL,
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
/****** Object:  Table [dbo].[Donacion]    Script Date: 15/5/2023 11:50:48 ******/
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
/****** Object:  Table [dbo].[Donante]    Script Date: 15/5/2023 11:50:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Donante](
	[IdDonante] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Apellido] [varchar](50) NOT NULL,
	[FechaDeNacimiento] [date] NOT NULL,
	[DNI] [int] NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Contraseña] [varchar](50) NOT NULL,
	[Peso] [int] NOT NULL,
	[BuenaSalud] [bit] NOT NULL,
	[Emabarazo] [bit] NOT NULL,
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
/****** Object:  Table [dbo].[DonanteXRecompensa]    Script Date: 15/5/2023 11:50:48 ******/
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
/****** Object:  Table [dbo].[Recompensas]    Script Date: 15/5/2023 11:50:48 ******/
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
