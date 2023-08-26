using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BikeDoctorApp.Models;

public partial class BikedoctorContext : DbContext
{
    public BikedoctorContext()
    {
    }

    public BikedoctorContext(DbContextOptions<BikedoctorContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Area> Areas { get; set; }

    public virtual DbSet<Bike> Bikes { get; set; }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<City> Cities { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Make> Makes { get; set; }

    public virtual DbSet<Package> Packages { get; set; }

    public virtual DbSet<PaymentMode> PaymentModes { get; set; }

    public virtual DbSet<Rating> Ratings { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<SecurityQuestion> SecurityQuestions { get; set; }

    public virtual DbSet<ServiceCentre> ServiceCentres { get; set; }

    public virtual DbSet<Status> Statuses { get; set; }

    public virtual DbSet<Transaction> Transactions { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=siddhi11;database=bikedoctor", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.33-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Area>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("areas");

            entity.HasIndex(e => e.CityId, "city_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Area1)
                .HasMaxLength(45)
                .HasColumnName("area");
            entity.Property(e => e.CityId).HasColumnName("city_id");

            entity.HasOne(d => d.City).WithMany(p => p.Areas)
                .HasForeignKey(d => d.CityId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("city_id");
        });

        modelBuilder.Entity<Bike>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("bikes");

            entity.HasIndex(e => e.MakeIdId, "FK8wsy0no02ta6042aau5deudbl");

            entity.HasIndex(e => e.MakeId, "make_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.MakeId).HasColumnName("make_id");
            entity.Property(e => e.MakeIdId).HasColumnName("make_id_id");
            entity.Property(e => e.Model)
                .HasMaxLength(45)
                .HasColumnName("model");

            entity.HasOne(d => d.Make).WithMany(p => p.BikeMakes)
                .HasForeignKey(d => d.MakeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("make_id");

            entity.HasOne(d => d.MakeIdNavigation).WithMany(p => p.BikeMakeIdNavigations)
                .HasForeignKey(d => d.MakeIdId)
                .HasConstraintName("FK8wsy0no02ta6042aau5deudbl");
        });

        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("bookings");

            entity.HasIndex(e => e.Statusid, "FK1sdx7gqn6axse3fv1dbb30j8i");

            entity.HasIndex(e => e.AppointmentDate, "appointment_date_UNIQUE").IsUnique();

            entity.HasIndex(e => e.BikeId, "bike_id_idx");

            entity.HasIndex(e => e.CustomerId, "cust_id_idx");

            entity.HasIndex(e => e.PackageId, "package_id_idx");

            entity.HasIndex(e => e.SerCenId, "serv_cent_id_idx");

            entity.HasIndex(e => e.Status, "status_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AppointmentDate)
                .HasColumnType("datetime")
                .HasColumnName("appointment_date");
            entity.Property(e => e.BasePrice).HasColumnName("base_price");
            entity.Property(e => e.BikeId).HasColumnName("bike_id");
            entity.Property(e => e.BikeRegNo)
                .HasMaxLength(45)
                .HasColumnName("bike_reg_no");
            entity.Property(e => e.BookingDate)
                .HasColumnType("datetime")
                .HasColumnName("booking_date");
            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.EstimatedPrice).HasColumnName("estimated_price");
            entity.Property(e => e.ExtraPrice).HasColumnName("extra_price");
            entity.Property(e => e.PackageId).HasColumnName("package_id");
            entity.Property(e => e.SerCenId).HasColumnName("ser_cen_id");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Statusid).HasColumnName("statusid");

            entity.HasOne(d => d.Bike).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.BikeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("bike_id");

            entity.HasOne(d => d.Customer).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("cust_id");

            entity.HasOne(d => d.Package).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.PackageId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("package_id");

            entity.HasOne(d => d.SerCen).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.SerCenId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("serv_cent_id");

            entity.HasOne(d => d.StatusNavigation).WithMany(p => p.BookingStatusNavigations)
                .HasForeignKey(d => d.Status)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("status_id");

            entity.HasOne(d => d.Status1).WithMany(p => p.BookingStatus1s)
                .HasForeignKey(d => d.Statusid)
                .HasConstraintName("FK1sdx7gqn6axse3fv1dbb30j8i");
        });

        modelBuilder.Entity<City>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("cities");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.City1)
                .HasMaxLength(45)
                .HasColumnName("city");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("customers");

            entity.HasIndex(e => e.AreaId, "area_id_idx");

            entity.HasIndex(e => e.LoginId, "login_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AreaId).HasColumnName("area_id");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.Fname)
                .HasMaxLength(45)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(45)
                .HasColumnName("lname");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.Phone)
                .HasMaxLength(45)
                .HasColumnName("phone");

            entity.HasOne(d => d.Area).WithMany(p => p.Customers)
                .HasForeignKey(d => d.AreaId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("area_cust_id");

            entity.HasOne(d => d.Login).WithMany(p => p.Customers)
                .HasForeignKey(d => d.LoginId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("login_id");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("login");

            entity.HasIndex(e => e.SecurityQuesId, "sec_ques_id_idx");

            entity.HasIndex(e => e.UserTypeId, "user_type_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Answer)
                .HasMaxLength(45)
                .HasColumnName("answer");
            entity.Property(e => e.Password)
                .HasMaxLength(45)
                .HasColumnName("password");
            entity.Property(e => e.SecurityQuesId).HasColumnName("security_ques_id");
            entity.Property(e => e.UserTypeId).HasColumnName("user_type_id");
            entity.Property(e => e.Username)
                .HasMaxLength(45)
                .HasColumnName("username");

            entity.HasOne(d => d.SecurityQues).WithMany(p => p.Logins)
                .HasForeignKey(d => d.SecurityQuesId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("sec_ques_id");

            entity.HasOne(d => d.UserType).WithMany(p => p.Logins)
                .HasForeignKey(d => d.UserTypeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("user_type_id");
        });

        modelBuilder.Entity<Make>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("makes");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Brand)
                .HasMaxLength(45)
                .HasColumnName("brand");
        });

        modelBuilder.Entity<Package>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("packages");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Cost).HasColumnName("cost");
            entity.Property(e => e.Details)
                .HasMaxLength(200)
                .HasColumnName("details");
            entity.Property(e => e.Name)
                .HasMaxLength(45)
                .HasColumnName("name");
        });

        modelBuilder.Entity<PaymentMode>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("payment_modes");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.PaymentMode1)
                .HasMaxLength(45)
                .HasColumnName("payment_mode");
        });

        modelBuilder.Entity<Rating>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("ratings");

            entity.HasIndex(e => e.CustomerId, "customer_id_idx");

            entity.HasIndex(e => e.ServCenId, "ser_centre_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Comment)
                .HasMaxLength(256)
                .HasColumnName("comment");
            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.Rating1).HasColumnName("rating");
            entity.Property(e => e.ServCenId).HasColumnName("serv_cen_id");

            entity.HasOne(d => d.Customer).WithMany(p => p.Ratings)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("customer_id");

            entity.HasOne(d => d.ServCen).WithMany(p => p.Ratings)
                .HasForeignKey(d => d.ServCenId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("ser_centre_id");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("roles");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Role1)
                .HasMaxLength(45)
                .HasColumnName("role");
        });

        modelBuilder.Entity<SecurityQuestion>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("security_questions");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Question)
                .HasMaxLength(150)
                .HasColumnName("question");
        });

        modelBuilder.Entity<ServiceCentre>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("service_centre");

            entity.HasIndex(e => e.AreaId, "area_sc_id_idx");

            entity.HasIndex(e => e.LoginId, "login_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AreaId).HasColumnName("area_id");
            entity.Property(e => e.Email)
                .HasMaxLength(256)
                .HasColumnName("email");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.Name)
                .HasMaxLength(45)
                .HasColumnName("name");
            entity.Property(e => e.Phone)
                .HasMaxLength(45)
                .HasColumnName("phone");
            entity.Property(e => e.Status).HasColumnName("status");

            entity.HasOne(d => d.Area).WithMany(p => p.ServiceCentres)
                .HasForeignKey(d => d.AreaId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("area_sc_id");

            entity.HasOne(d => d.Login).WithMany(p => p.ServiceCentres)
                .HasForeignKey(d => d.LoginId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("login_sc_id");
        });

        modelBuilder.Entity<Status>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("statuses");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Status1)
                .HasMaxLength(45)
                .HasColumnName("status");
        });

        modelBuilder.Entity<Transaction>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("transactions");

            entity.HasIndex(e => e.CustomerId, "cstmr_id_idx");

            entity.HasIndex(e => e.PaymentModeId, "payment_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Amount).HasColumnName("amount");
            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.Date)
                .HasColumnType("datetime")
                .HasColumnName("date");
            entity.Property(e => e.PaymentModeId).HasColumnName("payment_mode_id");
            entity.Property(e => e.TransactionNumber)
                .HasMaxLength(45)
                .HasColumnName("transaction_number");

            entity.HasOne(d => d.Customer).WithMany(p => p.Transactions)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("cstmr_id");

            entity.HasOne(d => d.PaymentMode).WithMany(p => p.Transactions)
                .HasForeignKey(d => d.PaymentModeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("payment_mode_id");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
