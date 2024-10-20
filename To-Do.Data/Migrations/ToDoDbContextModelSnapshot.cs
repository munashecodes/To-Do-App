﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ToDoApp.Data.DbContexts;

#nullable disable

namespace To_Do.Data.Migrations
{
    [DbContext(typeof(ToDoDbContext))]
    partial class ToDoDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("ToDoApp.Data.Entity_Models.Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime?>("CreationTime")
                        .HasColumnType("datetime2");

                    b.Property<int?>("CreatorId")
                        .HasColumnType("int");

                    b.Property<int?>("DeleterId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("DeletionTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("LastModificationTime")
                        .HasColumnType("datetime2");

                    b.Property<int?>("LastModifierId")
                        .HasColumnType("int");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CreatorId");

                    b.HasIndex("DeleterId");

                    b.HasIndex("LastModifierId");

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("ToDoApp.Data.Entity_Models.TaskItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime?>("CreationTime")
                        .HasColumnType("datetime2");

                    b.Property<int?>("CreatorId")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateToRemind")
                        .HasColumnType("datetime2");

                    b.Property<int?>("DeleterId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("DeletionTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("LastModificationTime")
                        .HasColumnType("datetime2");

                    b.Property<int?>("LastModifierId")
                        .HasColumnType("int");

                    b.Property<int>("Priority")
                        .HasColumnType("int");

                    b.Property<string>("TaskName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CreatorId");

                    b.HasIndex("DeleterId");

                    b.HasIndex("LastModifierId");

                    b.HasIndex("UserId");

                    b.ToTable("Tasks");
                });

            modelBuilder.Entity("ToDoApp.Data.Entity_Models.Account", b =>
                {
                    b.HasOne("ToDoApp.Data.Entity_Models.Account", "Creator")
                        .WithMany()
                        .HasForeignKey("CreatorId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("ToDoApp.Data.Entity_Models.Account", "Deleter")
                        .WithMany()
                        .HasForeignKey("DeleterId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("ToDoApp.Data.Entity_Models.Account", "LastModifier")
                        .WithMany()
                        .HasForeignKey("LastModifierId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.Navigation("Creator");

                    b.Navigation("Deleter");

                    b.Navigation("LastModifier");
                });

            modelBuilder.Entity("ToDoApp.Data.Entity_Models.TaskItem", b =>
                {
                    b.HasOne("ToDoApp.Data.Entity_Models.Account", "Creator")
                        .WithMany()
                        .HasForeignKey("CreatorId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("ToDoApp.Data.Entity_Models.Account", "Deleter")
                        .WithMany()
                        .HasForeignKey("DeleterId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("ToDoApp.Data.Entity_Models.Account", "LastModifier")
                        .WithMany()
                        .HasForeignKey("LastModifierId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("ToDoApp.Data.Entity_Models.Account", "User")
                        .WithMany("TaskItems")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.Navigation("Creator");

                    b.Navigation("Deleter");

                    b.Navigation("LastModifier");

                    b.Navigation("User");
                });

            modelBuilder.Entity("ToDoApp.Data.Entity_Models.Account", b =>
                {
                    b.Navigation("TaskItems");
                });
#pragma warning restore 612, 618
        }
    }
}
